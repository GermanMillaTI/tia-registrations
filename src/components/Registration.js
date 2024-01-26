import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistry } from "../firebase/utilities"
import telus from '../telus.png';
import { storage } from '../firebase/config';
import { ref, uploadBytesResumable } from "firebase/storage";
import { surveyJson } from './jsonQuestions/RegisrtationFormQuestions';
import { surveyLocalization } from "survey-core";
import { inputmask } from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import { useNavigate } from 'react-router-dom';
import { writeForakerValue } from '../firebase/forakerconfig';
import Constants from './Constants';
import { getDownloadURL } from 'firebase/storage';


const localeSettings = {
  completeText: "Submit",
  requiredError: "This item is required",
  loadingFile: "Loading...",
  chooseFileCaption: "Select a file",
  pageNextText: "Next"

}

inputmask(SurveyCore);
surveyLocalization.locales["en"] = localeSettings;
// Generate a random 8-digit number
function generateRandomNumber() {

  const now = new Date();

  // Extract individual components
  const year = String(now.getFullYear()).slice(-2);
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const millisecond = String(now.getMilliseconds()).padStart(3, '0');

  // Combine components to create the unique ID
  const uniqueId = `${year}${hour}${minute}${millisecond}`;

  return uniqueId;

}

function convertFeetToCentimeters(feet, inches) {
  const feetInCentimeters = feet * 30.48;
  const inchesInCentimeters = inches * 2.54;

  const totalCentimeters = feetInCentimeters + inchesInCentimeters;

  return totalCentimeters;
}


function Registration() {
  let millisecsStart;
  let pid;
  let clientIp;
  const survey = new Model(surveyJson);
  const tempFileStorage = {};


  const navigate = useNavigate();

  survey.onAfterRenderPage.add((_, options) => {
    millisecsStart = String(new Date().getMilliseconds()).padStart(3, '0');

    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => clientIp = data.ip)
      .catch(error => console.log(error));
  });


  survey.onUploadFiles.add((sender, options) => {

    document.getElementById("loading").style.display = "block";

    pid = generateRandomNumber().concat(millisecsStart);

    // Add files to the temporary storage
    if (tempFileStorage[options.name] !== undefined) {
      tempFileStorage[options.name].concat(options.files);
    } else {
      tempFileStorage[options.name] = options.files;
    }

    // Load file previews
    const content = [];
    options.files.forEach(file => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        content.push({
          name: file.name,
          type: file.type,
          content: fileReader.result,
          file: file
        });

        if (content.length === options.files.length) {
          // Return a file for preview as a { file, content } object 
          const promises = content.map(fileContent => {
            return new Promise((resolve, reject) => {
              const byteChars = atob(fileContent.content.split(',')[1]);
              const byteArrays = [];

              for (let offset = 0; offset < byteChars.length; offset += 512) {
                const slice = byteChars.slice(offset, offset + 512);
                const byteNumbers = new Array(slice.length);

                for (let i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
              }

              const imageBlob = new Blob(byteArrays, { type: file.type });

              const storageRef = ref(storage, `foraker/participants/${pid}/identification/${file.name}`);

              uploadBytesResumable(storageRef, imageBlob).then((onFulfill) => {
                if (onFulfill.state === 'success') {
                  // Resolve with the preview object only after successful upload
                  resolve({
                    file: fileContent.file,
                    content: fileContent.content
                  });
                } else {
                  // Reject if upload is not successful
                  reject(new Error("Upload failed"));
                }
                getDownloadURL(storageRef).then(url => {
                  sender.setValue('pptId_url', url.split("https://firebasestorage.googleapis.com/v0/b/tiai-registrations.appspot.com/o/foraker")[1])
                  document.getElementById("loading").style.display = "";
                })

              }).catch(error => {
                reject(error);
              });
            });
          });

          // Wait for all promises to resolve before calling the callback
          Promise.all(promises)
            .then(previews => {
              options.callback(previews);
            })
            .catch(error => {
              console.error(error);
            });
        }
      };
      fileReader.readAsDataURL(file);
    });
  });


  // Handles file removal
  survey.onClearFiles.add((_, options) => {
    // Empty the temporary file storage if "Clear All" is clicked 
    if (options.fileName === null) {
      tempFileStorage[options.name] = [];
      options.callback("success");
      return;
    }

    // Remove an individual file
    const tempFiles = tempFileStorage[options.name];
    if (!!tempFiles) {
      const fileInfoToRemove = tempFiles.filter(file => file.name === options.fileName)[0];
      if (fileInfoToRemove) {
        const index = tempFiles.indexOf(fileInfoToRemove);
        tempFiles.splice(index, 1);
      }
    }
    options.callback("success");
  });

  survey.onCompleting.add(function (sender, options) {

    options.allow = false;

    sender.setValue('height_cm', convertFeetToCentimeters(parseInt(sender.data['height_ft']), parseInt(sender.data['height_in'])));
    sender.setValue('weight_kg', parseFloat(sender.data['weight_lbs']) / 2.205)
    sender.setValue('phone', '+' + sender.data['phone']);
    sender.setValue('clientIp', clientIp);
    sender.setValue('identificationFile', 'uploaded')
    sender.setValue('timestamp', new Date());
    sender.setValue('year_of_birth', sender.data['date_of_birth'].substring(0, 4))
    sender.setValue('agreementConfirmation', sender.data['agreementConfirmation'][0]);
    sender.setValue('skinTone', sender.data['skinTone'][0]);
    sender.setValue('termsAgreement', sender.data['termsAgreement'][0]);


    const byteChars = atob(sender.data['signature'].replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
    const byteArrays = [];

    for (let offset = 0; offset < byteChars.length; offset += 512) {
      const slice = byteChars.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);

    }


    const imageBlob = new Blob(byteArrays, { type: 'image/png' });

    //storage.ref(`foraker/participants/${pid}/sla/${pid}`).put(imageBlob)
    const storageRef = ref(storage, `foraker/participants/${pid}/sla/${pid}_sla.png`);

    const uploadTask = uploadBytesResumable(storageRef, imageBlob);

    uploadTask.then(snapshot => {
      console.log(snapshot.state)
      getDownloadURL(storageRef).then(url => {

        sender.setValue("sla_url", url.split("https://firebasestorage.googleapis.com/v0/b/tiai-registrations.appspot.com/o/foraker")[1])


        options.allow = true;
        if (sender.data['industry'] !== 'Technology' && sender.data['industry'] !== 'Marketing and Media' && sender.data['healthConditions'].includes('none')) {

          writeRegistry(pid, sender.data);
          writeForakerValue(`participants/${pid}/`, sender.data);
          navigate(`/icf/${pid}`);

        } else {
          sender.setValue("status", "Rejected")
          sender.setValue("comment", "Automatically rejected due to health condition or industry")
          writeRegistry(pid, sender.data);
          writeForakerValue(`participants/${pid}/`, sender.data);

          sender.getAllQuestions().forEach(function (question) {
            question.readOnly = true;
          })
          document.getElementById("ThankyouPage").style.display = "block";
        }
      })
    })










  });


  return (
    <div>
      <div id='loading'></div>
      <div id="ThankyouPage">
        <img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} alt="TELUS Logo" />
        <h4>Thank you for your registration.</h4><br />
        <p>We will review your registration and contact you with any further steps.</p>
      </div>
      <img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} alt="" />
      <Survey model={survey}></Survey>
    </div>
  );
}



export default Registration;