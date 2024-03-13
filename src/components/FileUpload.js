import { fileUploadJSON } from './jsonQuestions/FileUploadQuestions';
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistryICF } from "../firebase/utilities"
import { surveyLocalization } from "survey-core";
import { inputmask } from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import { useLocation, useParams } from "react-router-dom";
import { writeForakerValue } from "../firebase/forakerconfig";
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase/config';
import telus from '../telus.png';
import { useState } from "react";

const localeSettings = {
    completeText: "Submit",
    requiredError: "This item is required",
    loadingFile: "Loading...",
    chooseFileCaption: "Select a file",
    pageNextText: "Next"

}

inputmask(SurveyCore);
surveyLocalization.locales["en"] = localeSettings;

function FileUpload() {
    const [showFileUploadty, setShowFileUploadty] = useState(false);
    const survey = new Model(fileUploadJSON);
    const location = useLocation();
    const pid = useParams();
    const searchParams = new URLSearchParams(location.search);
    const tempFileStorage = {};
    let fileUrl = '';

    survey.setValue("referenceId", pid['participantId']);
    survey.setValue("firstName", searchParams.get('fname'));
    survey.setValue("lastName", searchParams.get('lname'));
    survey.setValue("email", searchParams.get('email'));

    const id = pid['mode'];


    survey.onUploadFiles.add((sender, options) => {

        document.getElementById("loading").style.display = "block";

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

                            const storageRef = ref(storage, `foraker/participants/${pid['participantId']}/identification/${file.name}`);

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
                                    fileUrl = url.split(`https://firebasestorage.googleapis.com/v0/b/tiai-registrations.appspot.com/o/foraker%2Fparticipants%2F${pid['participantId']}%2Fidentification%2F`)[1]

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

    survey.onCompleting.add((sender, options) => {
        writeForakerValue(`participants/${pid['participantId']}/documents/${pid['participantId']}/`, { ["document" + id]: fileUrl });
        writeForakerValue(`participants/${pid['participantId']}/documents/`, { pending: true });
        setShowFileUploadty(true);
    })


    return (
        <>
            <div id='loading'></div>
            {showFileUploadty && <div id="ThankyouPage">

                <img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} alt="TELUS Logo" />
                <h4>Thanks for your document submission</h4><br />
                <p>We will review your submission and contact you with any further steps.</p>
            </div>}


            <Survey model={survey}></Survey>
        </>
    )
};

export default FileUpload;