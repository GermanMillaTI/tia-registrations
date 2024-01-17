import { icfQuestions } from "../firebase/ICFquestions";
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { writeRegistry } from "../firebase/utilities"
import telus from '../telus.png';
import { storage } from '../firebase/config';
import { ref, uploadBytesResumable } from "firebase/storage";
import { surveyLocalization } from "survey-core";
import { inputmask } from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import { useParams } from "react-router-dom";

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

    survey.onComplete.add(function (sender, options) {
        console.log(sender.data)
    });


    return (
        <>
            <div id='loading'></div>
            {/*<img className="telus-logo" src={telus} style={{ width: "fit-content", maxWidth: "100%" }} />*/}
            <Survey model={survey}></Survey>
        </>
    )
};

export default Icf;