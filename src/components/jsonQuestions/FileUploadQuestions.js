export const fileUploadJSON = {
    showQuestionNumbers: false,
    waitForUpload: true,
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "panel",
                    name: "introduction",
                    elements: [{
                        type: "html",
                        html: `<div style="text-align: center;">
                    <div style="text-align: center;">&nbsp;<img src="https://fs30.formsite.com/LB2014/images/TELUS_2020_Int_EN_Hor_Digital_RGB_(1).jpg" alt="" width="702" height="136" /></div>
                    <div style="text-align: left;">
                    <p style="text-align: center;"><span style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px;"><strong>Onsite Research Study, Foraker</strong></span></p>
                    <p><span>Please upload the requested documents by submitting this form.</span></p>
                    <p>&nbsp;</p>
                    </div>
                    <div>
                    <p><span><u>IMPORTANT INFORMATION</u></span></p>
                    <p><span>Your data is protected by our&nbsp;<a href="https://www.telusinternational.com/privacypolicy/contributors" target="_blank" rel="noopener">Privacy Policy</a></span></p>
                    </div>
                    <div>
                    <div>
                    <p><span><strong>About TELUS International AI</strong></span></p>
                    <p><span>Creating and enhancing the world's data to enable better AI via human intelligence</span></p>
                    <p><span>We help companies test and improve machine learning models via our global AI Community of 1 million+ annotators and linguists. Our proprietary AI training platform handles all data types (text, images, audio, video and geo) across 500+ languages and dialects. Our AI Data Solutions vastly enhance AI systems across a range of applications from advanced smart products, to better search results, to expanded speech recognition, to more human-like bot interactions and so much more.</span></p>
                    <p><span><a href="https://www.telusinternational.com/solutions/ai-data-solutions" target="_blank" rel="noopener">TELUS International AI</a></span></p>
                    </div>
                    </div>
                    </div>`
                    }, {
                        type: "html",
                        html: `<h4 style="text-align: center;">`
                            + `Personal Information`
                            + `</h4>`
                    }, {
                        name: "referenceId",
                        type: "text",
                        readOnly: true,
                    }, {
                        name: "firstName",
                        title: "First name:",
                        type: "text",
                        isRequired: true,
                        startWithNewLine: false,
                        readOnly: true,

                    }, {
                        name: "lastName",
                        title: "Last name:",
                        type: "text",
                        isRequired: true,
                        startWithNewLine: false,
                        readOnly: true,
                    }, {
                        name: "email",
                        type: "text",
                        title: "Email address:",
                        validators: [
                            { type: "email", text: "Value must be a valid email" }
                        ],
                        isRequired: true,
                        startWithNewLine: false,
                        readOnly: true,

                    }, {
                        type: "file",
                        title: "Driver's license or other form of identification",
                        name: "identificationFile",
                        storeDataAsText: false,
                        waitForUpload: true,
                        allowMultiple: false,
                        maxWidth: "40%",
                        height: 10,
                        isRequired: true
                    }, {
                        type: "html",
                        html: `<div><span style="color: #ff0000;"><strong>NB: </strong>you MUST   HIDE the address, social security number, ID number on the documents you upload.</span></div>`
                    }
                    ]
                }
            ]


        }
    ]
}