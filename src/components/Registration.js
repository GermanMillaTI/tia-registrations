import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistry } from "../firebase/utilities"
import telus from '../telus.png';
import { storage } from '../firebase/config';
import { ref, uploadBytesResumable } from "firebase/storage";
import { surveyJson } from '../firebase/RegisrtationFormQuestions';
import { surveyLocalization } from "survey-core";
import { inputmask } from "surveyjs-widgets";
import * as SurveyCore from "survey-core";


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



function Registration() {
  let millisecsStart;
  let pid;
  let clientIp;
  const survey = new Model(surveyJson);
  const tempFileStorage = {};


  survey.onAfterRenderPage.add((_, options) => {
    millisecsStart = String(new Date().getMilliseconds()).padStart(3, '0');

    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => clientIp = data.ip)
      .catch(error => console.log(error));
  });


  survey.onUploadFiles.add((_, options) => {

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
                document.getElementById("loading").style.display = "";
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

  survey.onComplete.add(function (sender, options) {


    sender.setValue('clientIp', clientIp);
    sender.setValue('timestamp', new Date());

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


    writeRegistry(pid, sender.data);
    //storage.ref(`foraker/participants/${pid}/sla/${pid}`).put(imageBlob)
    const storageRef = ref(storage, `foraker/participants/${pid}/sla/${pid}_sla.png`);

    uploadBytesResumable(storageRef, imageBlob);


    writeRegistry(pid, sender.data);

    console.log(sender.data);
  });


  return (
    <div>
      <div id='loading'></div>
      <img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} />
      <Survey model={survey}></Survey>
    </div>
  );
}



export default Registration;