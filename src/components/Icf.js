import { icfQuestions } from "./jsonQuestions/ICFquestions";
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistryICF } from "../firebase/utilities"
import { surveyLocalization } from "survey-core";
import { inputmask } from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import { useParams } from "react-router-dom";
import { writeForakerValue } from "../firebase/forakerconfig";
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase/config';
import telus from '../telus.png';

const localeSettings = {
    completeText: "Submit",
    requiredError: "This item is required",
    loadingFile: "Loading...",
    chooseFileCaption: "Select a file",
    pageNextText: "Next"

}

inputmask(SurveyCore);
surveyLocalization.locales["en"] = localeSettings;

function Icf() {
    const survey = new Model(icfQuestions);
    const pid = useParams();

    survey.setValue("referenceId", pid['participantId'])

    survey.onCompleting.add(function (sender, options) {

        options.allow = false;

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
            getDownloadURL(storageRef).then(url => {
                console.log(url);
                sender.setValue("icf_url", url.split("https://firebasestorage.googleapis.com/v0/b/tiai-registrations.appspot.com/o/foraker")[1])



                options.allow = true;
                sender.setValue('agreementConfirmation', sender.data['agreementConfirmation'][0]);
                writeRegistryICF(pid['participantId'], sender.data);
                writeForakerValue(`/participants/${pid['participantId']}/icf`, sender.data);


                document.getElementById("ThankyouPage").style.display = "block";

                sender.getAllQuestions().forEach(function (question) {
                    question.readOnly = true;
                })
            })
        })

    });


    return (
        <>
            <div id="ThankyouPage">
                <img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} alt="TELUS Logo" />
                <h4>Thank you for your registration.</h4><br />
                <p>We will review your registration and contact you with any further steps.</p>
            </div>


            <Survey model={survey}></Survey>
        </>
    )
};

export default Icf;