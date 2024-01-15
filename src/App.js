import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistry } from "./firebase/utilities"
import telus from './telus.png';
import { storage } from './firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { surveyJson } from './firebase/RegisrtationFormQuestions';
import { useEffect, useState } from 'react';
import { ref as dbref, get, onValue } from "firebase/database";
import { realtimeDb } from './firebase/config';



function App() {
  const [maxId, setMaxId] = useState([]);
  const survey = new Model(surveyJson);
  const tempFileStorage = {};

  useEffect(() => {
    onValue(dbref(realtimeDb, `/settings/max_id`), (snapshot) => {
      setMaxId(snapshot.val() + 1);
    });
  }, [])

  survey.onUploadFiles.add((_, options) => {
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
          options.callback(
            content.map(fileContent => {
              return {
                file: fileContent.file,
                content: fileContent.content
              };
            })
          );
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

    const pid = maxId;
    const byteChars = atob(sender.data['signature'].replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
    const idByteChars = atob(sender.data['identificationFile'][0]['content'].replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
    const byteArrays = [];
    const idByteArrays = [];

    for (let offset = 0; offset < byteChars.length; offset += 512) {
      const slice = byteChars.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);

    }

    for (let offset = 0; offset < idByteChars.length; offset += 512) {
      const slice = idByteChars.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);

      }

      const byteArray = new Uint8Array(byteNumbers);
      idByteArrays.push(byteArray);
    }

    const imageBlob = new Blob(byteArrays, { type: 'image/png' });
    const idImageBlob = new Blob(idByteArrays, { type: sender.data['identificationFile'][0]['type'] });


    writeRegistry(pid, sender.data);
    //storage.ref(`foraker/participants/${pid}/sla/${pid}`).put(imageBlob)
    const storageRef = ref(storage, `foraker/participants/${pid}/sla/${pid}_sla.png`);

    uploadBytesResumable(storageRef, imageBlob);

    const idStorageRef = ref(storage, `foraker/participants/${pid}/identification/${pid}_identification.jpeg`)
    uploadBytesResumable(idStorageRef, idImageBlob).then(() => {
      getDownloadURL(idStorageRef).then((downloadURL) => {
        console.log(downloadURL);
      });
    });



    writeRegistry(pid, sender.data);
  });


  return (
    <>

      <img className="telus-logo" src={telus} />
      <Survey model={survey}></Survey>
    </>
  );
}



export default App;