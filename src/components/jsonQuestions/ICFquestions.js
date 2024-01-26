export const icfQuestions = {
    showQuestionNumbers: false,
    waitForUpload: true,
    completedHtml: "<div style=\"max-width:688px;text-align:center;margin: 16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you for your registration.</h4>\n<br>\n<p>We will review your registration and contact you with any further steps.</p>\n</div>\n\n</div>\n",
    pages: [
        {
            name: "page1",
            elements: [{
                type: "panel",
                name: "introduction",
                elements: [{
                    type: "html",
                    html: `<div style="text-align: center;">
                    <div style="text-align: center;"><span style="color: #000000">&nbsp;<img src="https://fs30.formsite.com/LB2014/images/TELUS_2017_Int_EN_Hor_RGB_(1).jpg" alt="" width="50%" height="auto" /></span></div>
                    <div style="text-align: center;">
                    <div style="text-align: center;">
                    <div style="text-align: center;"><span style="color: #000000"><strong>Thank you for your interest in our Project Foraker!</strong></span></div>
                    <div style="text-align: center;">&nbsp;</div>
                    <div style="text-align: center;"><span style="color: #000000">To participate, please sign the Consent Form below.</span></div>
                    <div style="text-align: center;">&nbsp;</div>
                    <div style="text-align: center;">
                    <div>
                    <p><span>If you have any questions, please reach out to: <span style="font-weight: 400"><a href="mailto:aisourcing@telusinternational.com">aisourcing@telusinternational.com</a></span></span></p>
                    <div style="text-align: left;">&nbsp;</div>
                    </div>
                    <p style="text-align: center;"><span"><strong><u>IMPORTANT INFORMATION</u></strong></span></p>
                    <p><span>Your data is protected by our <a href="https://www.telusinternational.com/privacypolicy/contributors" target="_blank" rel="noopener">Privacy Policy</a></span></p>
                    <p><span><strong>About TELUS International AI</strong></span></p>
                    <p><span>Creating and enhancing the world's data to enable better AI via human intelligence</span></p>
                    <p><span>We help companies test and improve machine learning models via our global AI Community of 1 million+ annotators and linguists. Our proprietary AI training platform handles all data types (text, images, audio, video and geo) across 500+ languages and dialects. Our AI Data Solutions vastly enhance AI systems across a range of applications from advanced smart products, to better search results, to expanded speech recognition, to more human-like bot interactions and so much more.</span></p>
                    <p><span><a href="https://www.telusinternational.com/solutions/ai-data-solutions" target="_blank" rel="noopener">TELUS International AI</a></span></p>
                    </div>
                    </div>
                    </div>
                    </div>`
                }]
            }, {
                type: "panel",
                name: "personalInfo",
                elements: [
                    {
                        type: "html",
                        html: `<h4 style="text-align: center;">`
                            + `Personal Information`
                            + `</h4>`
                    },
                    {
                        name: "email",
                        type: "text",
                        title: "Email address:",
                        validators: [
                            { type: "email", text: "Value must be a valid email" }
                        ],
                        isRequired: true,
                    },
                    {
                        name: "referenceId",
                        type: "text",
                        readOnly: true,
                        startWithNewLine: false
                    }
                ]
            }, {
                type: "panel",
                name: "confidentiality",
                elements: [{
                    type: "html",
                    html: `<h4 style="text-align: center;">`
                        + `Confidentiality`
                        + `</h4>`
                }, {
                    type: "html",
                    html: `<span style="color:red">*Please read and sign the Consent Form of the Study if you wish to participate in this project. (Scroll down to see the full document).</span>`
                }, {
                    type: "html",
                    html: `<div style="width:100%;height:600px;overflow:auto;border:1px solid #555; padding-left:10px">`
                        + `<p style="text-align: center;"><strong>STUDY INFORMED CONSENT FORM </strong></p>
                        <p style="text-align: center;"><strong>Study Title: Sirocco User Study</strong></p>
                        <p style="text-align: center;"><strong>TELUS International:</strong></p>
                        <p style="text-align: center;">Jessica Tucker: jessica.tucker@telusinternational.com</p>
                        <p style="text-align: center;"><strong>Research Leads:</strong></p>
                        <p style="text-align: center;">Stefan Auer: stefan.auer@apple.com</p>
                        <p>You are receiving this Study Informed Consent Form (“<strong>Consent</strong>”) because you have been asked to participate in a voluntary study administered by Apple Inc. (“<strong>Apple</strong>”) (the “<strong>Study Sponsor</strong>”) & organized by TELUS International AI, Inc. (the “<strong>Study Organizer</strong>”).</p>
                        <p>This Consent will tell you the following about this Study:</p>
                        <p>(1) Its purpose and what you will be asked to do;</p>
                        <p>(2) The information that may be collected from you and how it will be used or disclosed;</p>
                        <p>(3) Potential risks and discomforts;</p>
                        <p>(4) Your confidentiality obligations if you decide to take part in the Study; and</p>
                        <p style='margin-bottom: 40px;'>(5) How you may stop being in the Study and what happens to your information after you stop.</p>
                        <p><strong>PLEASE READ THIS CONSENT CAREFULLY AND ASK ANY QUESTIONS YOU HAVE ABOUT THE STUDY BEFORE SIGNING THIS FORM.&nbsp; </strong></p>
                        <p style='margin-bottom: 40px;'><strong>Your decision to take part in this Study is completely voluntary and you can decide not to participate or stop participating at any time</strong>.&nbsp;</p>
                        <p><strong>WHY IS THIS STUDY BEING DONE?&nbsp; </strong></p>
                        <p style='margin-bottom: 40px;'>The purpose of this study is to collect videos/images of human subjects performing
                        various body poses and motion while sitting, standing, laying, walking indoors, and will
                        be conducted with and without a device. The results of this study may be used to
                        develop and improve Apple products and features(for example, Apple Fitness+ ) and
                        other purposes stated in this Consent. &nbsp;</p>
                        <p><strong>WHAT WILL I BE ASKED TO DO?&nbsp; </strong></p>

                        <p >A member of the Study Team will walk you through the study and will explain this
                        Consent and ask you to sign it. The study procedures will be explained to you and you
                        will have an opportunity to ask questions.</p>

                        <p>The study will take up to 60 minutes and will involve you wearing a data collection
                        device on your head. Prior to entering the study space, we will ask you to store any
                        electronic devices you have brought in a locker.</p>

                        <p>We will first fit you with the device and ensure that it is comfortable. If you wear glasses,
                        we will take measurements of them to determine the correct lenses for the device.</p>

                        <p>You will then be asked to participate in camera-based motion capture while wearing the
                        device. There will be a number of cameras in the room and on the device that record
                        your movements.</p>

                        <p>We will ask you to perform certain gestures, body movements, actions, or physical
                        activities such as sit down, walk, wave, and lay down, Simulate meditation by closing
                        eyes, taking deep breathes. Simulated videos of stick figures representing body
                        movements will also be shown to help guide you through each action. Actions will be
                        varied and are not demanding. You can stop at anytime if you need breaks.</p>

                        <p>In addition to movement data, we will collect demographic data such as gender, age,
                        clothing type, jewelry, accessories, weight, height, and other body measurements like
                        waist circumference, arm length etc. If you are uncomfortable with any of these data
                        measurements, you may simply say you want to skip it.</p>

                        <p>The Vendor may ask you to bring with you and wear very loose or very bulky upper-
                        body clothing (i.e., clothing that changes body shape significantly like winter jackets,
                        coats, dresses) to be worn during the study.</p>

                        <p>The Study Team will collect photo and video images of your face, head, and complete
                        body during the Study session and will generate photorealistic and mesh 3D models of
                        your face, head, and complete body.</p>

                        <p style='margin-bottom:40px'>Note: If you signed a Contributor Services Agreement and/or any other document with
                        the Study Organizer, any parts of these documents that conflict with this Consent do not
                        apply to your participation in this Study. For instance, any language that creates an
                        independent contractor relationship with study participants, waives or appears to waive
                        your legal rights, or releases or appears to release the Study Organizer, Study Sponsor,
                        or their agents from liability for negligence, does not apply to your participation in this
                        Study. The Study Organizer has agreed that such language will not be enforced against
                        the participants in this Study.</p>

                        <p><strong>WHERE IS THIS STUDY BEING DONE?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>This study will take place in Soquel 1, 305 Soquel Way, Sunnyvale.&nbsp;</p>

                        <p><strong>HOW MANY PEOPLE WILL BE IN THIS STUDY?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>This Study is targeting enrollment of at least 370 participants.</p>

                        <p><strong>HOW LONG WILL I BE IN THIS STUDY?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>We ask you to complete one 60-minute visit. We may have future versions of this study
                        and may invite you to complete additional visits. You will sign a new consent form for
                        each visit.</p>

                        <p><strong>WHO CAN PARTICIPATE IN THIS STUDY? </strong></p>
                        <p>Before starting this Study, you must meet all the following criteria:&nbsp;</p>
                        <ul style='margin-bottom:40px'>
                        <li>Able to read and understand the informed consent form and study requirements.</li>
                        <li>Willing and able to participate in study procedures described in the consent form.</li>
                        <li>Must be 18-65 years old.</li>
                        <li>Have never been disqualified from an Apple study due to medical condition(s).</li>
                        <li>Willing and able to wear a head mounted device.</li>
                        </ul>

                        <p><strong>YOU CANNOT PARTICIPATE IN THIS STUDY IF:</strong></p>
                        <ul style='margin-bottom:40px'>
                        <li>You have been advised by a medical provider against using a head mounted device.</li>
                        <li>You are experiencing or have recently experienced dizziness, lightheadedness,
                        vertigo</li>
                        <li>You have balance or gait disorders, or are considered a fall risk (coordination disorder)</li>
                        <li>You’re not comfortable wearing a data collection device on your head.</li>
                        <li>You have had a cold or flu like symptoms in the past two weeks.</li>
                        <li>You work for a technology company or are an Apple employee.</li>
                        <li>You are employed in marketing, media, or maintain an active blog.</li>
                        <li>You currently have head lice or other transmittable scalp conditions.</li>
                        <li>You take photosensitizing medication, have a photosensitive condition.</li>
                        <li>You have undergone photodynamic therapy.</li>
                        <li>You have ever had anything in your life regarding seizures.</li>
                        <li>You have conditions aggravated by wearing a head mounted device.</li>
                        <li>You have migraines or chronic headaches.</li>
                        <li>You have cervical spine disease, neck or upper back pain.</li>
                        <li>You have numbness or tingling in finger(s).</li>
                        <li>You have Ménière’s disease, a neurological disorder, or other condition that may
                        prevent you from safely using a head mounted display.</li>
                        </ul>

                        <p><strong>WHAT ARE THE POSSIBLE RISKS OR DISCOMFORTS?&nbsp; </strong></p>
                        <p>Some medical conditions and symptoms could be aggravated by using the device. You
                        should be aware of these when choosing to use the device and discontinue using it if
                        symptoms worsen or become uncomfortable. Examples of symptoms/conditions that
                        could be aggravated include but are not limited to:</p>
                        <ul>
                        <li>Nausea</li>
                        <li>Migraine or chronic headache</li>
                        <li>Neck or upper back pain, stiffness, or injury</li>
                        <li>Pregnancy</li>
                        <li>Pain, numbness or tingling radiating down a limb</li>
                        <li>Dizziness, lightheadedness, vertigo (room spinning sensation)</li>
                        <li>Conditions including vestibular migraines, Meniere’s disease, BPPV, visual vertigo,
                        vestibular neuritis, labyrinthitis, inner ear infection may exacerbate symptoms.</li>
                        <li>Heart related conditions or medications that can cause arrhythmias, low blood pressure
                        or dehydration may unmask or worsen symptoms by using this device</li>
                        <li>Conditions, or certain medications used to treat diabetes mellitus, that can cause low
                        blood sugars may unmask or worsen symptoms by using this device.</li>
                        <li>Altered mentation (due to underlying medical condition, medications, alcohol, or recreation drugs)</li>
                        <li>Balance, gait disorders, or having a fall risk (i.e., coordination disorder)</li>
                        <li>Anxiety disorders/panic attacks</li>
                        <li>Eye related symptoms:
                        <ul>
                        <li>Eye or vision conditions</li>
                        <li>Dry, itchy, watery eyes</li>
                        <li>Redness, burning sensation</li>
                        <li>Tenderness or swelling of eyelid</li>
                        </ul>
                        </li>
                        <li>Any known neurological disorders or other condition that could be aggravated by the
                        study, including traumatic brain injury, post-concussion syndrome (be aware if you had
                        concussions in the past)</li>
                        </ul>
                        <p>If you have any of these conditions or are actively experiencing any of these symptoms,
                        you should wait until they resolve or seek advice from your medical provider on whether
                        it is safe for you to use an HMD. If you are prone to dizziness, lightheadedness, or
                        vertigo, these conditions may be exacerbated by use of the HMD.&nbsp;</p>
                        <p>Regardless of your medical history, some persons may experience the following
                        symptoms when using a head mounted video device: Stomach awareness, nausea,
                        vomiting, motion sickness, pallor, sweating, dizziness, postural instability, disorientation,
                        eye strain, eye fatigue, eye or muscle twitching, double vision, blurred vision, dry/itchy
                        eyes, excessive eye watering, exacerbation of underlying eye conditions, headache,
                        lightheadedness, seizure, fatigue, drowsiness, increased anxiety, increased
                        salivation/sweating, tingling, numbness, burning, stiffness, impaired hand-eye
                        coordination (VR “hangover”). Some symptoms may occur or persist after using the
                        device.&nbsp;</p>
                        <p>You may experience slight to moderate musculoskeletal discomfort, skin rashes, or
                        irritation from wearing a head mounted device. Head, neck and/or back injuries or
                        conditions and/or active discomfort in those areas may be aggravated by the study
                        device.&nbsp;</p>
                        <p>If you have balance issues, gait disorders, or coordination disorders, use of the HMD
                        could put you at increased risk of disorientation or a fall. If you experience any of these
                        conditions while using the HMD, you should remove the HMD and discontinue use until
                        the symptoms subside.&nbsp;</p>
                        <p>If you feel ill, nauseated, disoriented, or uncomfortable while using the Study device, or
                        believe you are injured, alert the moderator, and we will stop your participation in the
                        Study. Remove the device and remain seated until your symptoms have subsided. In
                        addition, you should not drive, operate any machinery, or undertake any hazardous
                        activities until all symptoms subside.&nbsp;</p>
                        <p>Please tell onsite study personnel immediately if you have any questions or are unclear
                        on what to do next. If you have any concerns about the safety of the study or have
                        questions please ask the Research Lead. No significant risks or permanent side effects
                        are anticipated. There may additionally be some unknown and unforeseeable risks.&nbsp;</p>

                        <p style='margin-bottom:40px'>If experiencing pain, discomfort, side effects, notify the Research Lead or moderator.&nbsp;</p>

                        <p><strong>WHERE SHOULD I REPORT INJURIES OR SIDE EFFECTS?</strong>&nbsp;</p>

                        <p style='margin-bottom:40px'>If you are injured please seek appropriate medical attention. Please also report any
                        injuries or side effects to the Study Lead: <a href='mailto:jessica.tucker@telusinternational.com'>jessica.tucker@telusinternational.com</a>. This is
                        important information for device development and addressing potential safety issues.</p>
                        

                        <p><strong>WHAT HAPPENS IF I AM INJURED BECAUSE OF THE STUDY?</strong>&nbsp;</p>
                        <p>We will make reasonable efforts to prevent you from being injured as a result of this
                        Study. If we determine that you followed the directions of the Study Team and still got
                        sick or hurt as a direct result of a Study procedure, device, or test, you will be
                        reimbursed for the medically necessary care for your injuries. Payments for other
                        expenses (such as time off work, lost wages, child-care, etc.) will not be offered through
                        the Study. You do not give up any legal rights by signing this form.</p>
                        <p style='margin-bottom:40px'>To pay medical expenses, Study Sponsor and its designee may need to know some
                        information like your; name, date of birth, social security number, copies of bills and
                        applicable medical records, (if applicable) Medicare Beneficiary Identifier (MBI). Study
                        Sponsor or its designee may check to see if you receive coverage under Medicare or
                        another governmental insurance plan and, if you do, report the payment as required by
                        law.</p>

                        <p><strong>WHAT DATA WILL BE COLLECTED AND HOW LONG WILL IT BE KEPT?&nbsp; </strong></p>
                        <p>As part of this Study, the following data may be collected or accessed as part of the Study (collectively, we call this “<strong>Study Data</strong>”):&nbsp;</p>
                        
                        <ul>
                        <li><strong>Contact Information:</strong> Name and Email Address. Your Contact Information will be
                        deleted within one year after the Study ends.</li>
                        <li><strong>Demographic Data:</strong> Age, gender, birth year, ethnicity, weight, height, clothing type
                        worn, jewelry worn, accessories worn, waist circumference, arm length.   This
                        information, some of which may be considered Sensitive Personal Data, will be
                        collected by the Study Team during Study onboarding to ensure we are performing
                        research on a sample of representative participants of the age, gender, and ethnicity
                        of Apple’s potential customer population to avoid biasing our products as much as
                        possible and also may be used to assess the impact of this Demographic Data on the
                        design, development, and/or use of the Study device. Your Coded Demographic Data
                        may be retained as long as necessary for the purposes described in this Consent.</li>
                        <li><strong>Photo/Video/Audio:</strong> Photographic images, video recordings, and photo-realistic and
                        mesh 3D reconstructions (“3D Models”)of your head, face, and complete body,
                        including your body in various poses and in motion. Your Coded Photo/Video Data will
                        be deleted within 7 years after the Study ends.</li>
                        <li><strong>Biometric Data:</strong> As stated above, photo and video images will be collected of your
                        head, face, and complete body and 3D Models constructed of your head, face, and
                        body.This information may be used to develop algorithms and technologies to enable
                        facial recognition or similar technologies. Some laws may consider these images to be
                        Sensitive Personal Data and/or “biometric data” and require your explicit consent for
                        collection. By signing this Consent you agree to the collection and use of your
                        Biometric Information as described in this Consent. Your Coded Biometric Information
                        will be deleted within 7 years after the Study ends.</li>
                        <li><strong>Device-Related Feedback Data:</strong> Feedback or information you provide or that is
                        observed by the Study Team during a Study session about your experience in the
                        Study and with the Study devices. Your Coded Device-Related Feedback Data may
                        be retained as long as necessary for the purposes described in this Consent.
                        Note some of these data types have additional protections under data protection law,
                        including some of the Demographic Data and Biometric Information (<strong>"Sensitive
                        Personal Data</strong>").</li>
                        </ul>
                        <p style='margin-bottom:40px'>All Study Data will be retained in accordance with the periods set forth above, or longer
                        as may be required to meet legal and regulatory obligations.</p>
                        <p><strong>HOW WILL MY STUDY DATA BE KEPT CONFIDENTIAL?</strong><strong>&nbsp;</strong></p>
                        <p>Your Contact Information will be held securely by Study Organizer, and access limited to
                        Study Organizer personnel who need access to manage the Study. Your remaining
                        Study Data will be separated from your Contact Information and assigned a code (we
                        use the word <strong>“Coded”</strong> to describe these data that is, <strong>“Coded Study Data”</strong>). Your Coded
                        Study Data will be maintained by Study Sponsor in a central study database with other
                        subjects’ Coded Study Data.</p>

                        <p>All Study Data that identifies you will be protected and treated as confidential. However,
                        total confidentiality cannot be guaranteed. It is possible that members of the Study
                        Team could identify you from your Coded Study Data. For example, if the Study Data
                        includes photo images of you, there could be unauthorized access to the database used
                        to store your Study Data. Further, if you are in multiple studies, your Study Data may be
                        combined across those studies, which could increase the risk that someone could
                        identify you. There may be other privacy risks that we cannot anticipate now.</p>

                        <p style='margin-bottom:40px'>For more information on how Study Data will be kept secure and confidential, please
                        contact the Study Lead listed above.</p>

                        <p><strong>HOW MAY MY STUDY DATA BE USED AND DISCLOSED?</strong></p>

                        <p>Your Study Data (and where possible, only your Coded Study Data) may be collected,
                        used, stored, analyzed, maintained, disclosed, and otherwise processed, for the
                        following purposes:</p>

                        <ul>
                        <li>To support and carry out the Study.</li>
                        <li>To verify that the Study is done properly.</li>
                        <li>To contact you about the Study, as necessary.</li>
                        <li>To analyze the Coded Study Data and publish results.</li>
                        <li>To design or improve future studies.</li>
                        <ul>
                            <li>To combine data and results from this Study (including Coded Study Data) with
                            data and results from other related Study Sponsor studies whose purpose is
                            similar to the purpose of this Study.</li>
                            <li>For Study Sponsor’s development, design, approval (including regulatory
                            approval), improvement, production, publication, and/or support of products,
                            technologies, processes, and services, including algorithm development.</li>
                        </ul>
                        </ul>

                        <p>Your Study Data, including your Coded Study Data, may be shared with, collected,
                        used, stored, analyzed, maintained, disclosed, and otherwise processed for the
                        purposes stated above by Study Sponsor personnel, external entities with whom Study
                        Sponsor may choose to collaborate (under appropriate contractual obligations), and
                        designated third parties acting on behalf of Study Sponsor (also with appropriate
                        contractual obligations).</p>

                        <p>When required by law, Study Data in identifiable form may be provided to third parties
                        such as public, regulatory, or government authorities, including law enforcement.
                        The results of this Study may be published or presented, but will not include any
                        information that would let others know who you are.</p>

                        <p>Your Study Data may also be used for the following purposes:</p>

                        <p><strong>For Study Recruitment.</strong> The Study Team may use or share your Coded Study Data
                        with other Study Sponsor study teams to determine whether you might be eligible for
                        future studies and if so to contact you for those studies. If you are contacted, you may
                        choose not to participate.</p>

                        <p style='margin-bottom:40px'>If you are contacted regarding related or unrelated future studies, you may choose not
                        to participate.</p>

                        <p><strong>WHAT DATA RIGHTS DO I HAVE? </strong><strong>&nbsp;</strong></p>

                        <p>You may contact the Study Lead at any time to request deletion of your personal
                        information associated with your Study Data. In some circumstances, deletion of your
                        personal information may not be feasible (for instance, if your Coded Study Data has
                        been de-linked from your Contact Information). However, reasonable efforts will be
                        made to delete identifiable data within a reasonable amount of time of your request.</p>

                        <p>You may also withdraw from the Study at any time – see “Can I Stop Being In This
                        Study?” below.</p>

                        <p>If you are a resident of the state of California, the following applies to you:<br>
                        If you decide to take part in the Study, you have certain rights with regard to your
                        personal information, including the right to request access to personal information
                        collected about you as part of this Study. You also have the right to request that such
                        personal information be corrected or deleted. You may freely exercise these rights
                        without discrimination.</p>

                        <p>If you request deletion of your personal information, reasonable efforts will be made to
                        delete identifiable personal information included within your Study Data within a
                        reasonable amount of time.</p>

                        <p>In some circumstances, we may not be able to complete the actions you request. For
                        example, we may be permitted or required to retain all or part of your personal
                        information for certain purposes including when required by law. Also, it may not be
                        possible to delete your personal information if your Contact Information was removed
                        from your Coded Study Data.</p>

                        <p style='margin-bottom:40px'>You can exercise the above rights by contacting the Study Lead.</p>

                        <p><strong>ARE THERE BENEFITS TO BEING IN THIS STUDY?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>The goal of this Study is to obtain information related to the Study purposes, so, you will not receive any direct benefit from this Study.&nbsp;</p>
                        
                        <p><strong>ARE THERE ANY OPTIONS OTHER THAN BEING IN THIS STUDY?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>The only other option is not to participate in this Study.</p>
                        
                        <p><strong>WILL I GET PAID FOR BEING IN THIS STUDY?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>You will be compensated $125 for your participation in this Study, issued by Study
                        Organizer after Study session completion, In the form of an electronic deposit.</p>

                        <p><strong>CAN I STOP BEING IN THIS STUDY?&nbsp; </strong></p>
                        <p>You may withdraw from this Study at any time, for any reason, without penalty by
                        contacting a member of the Study Team, or the Study Organizer, including the Study
                        Lead whose contact information is at the top of this Consent. If you withdraw prior to
                        completion, you may be compensated at a prorated amount.</p>
                        <p style='margin-bottom:40px'>If you withdraw from the Study, Study data collected up to that point may continue to be
                        used and kept as described in this Consent. You may request that your Study Data be
                        deleted, as stated above in the “What Data Rights Do I Have” section.</p>

                        <p><strong>COULD MY PARTICIPATION BE STOPPED EARLY?&nbsp; </strong></p>
                        <p>You may be removed from this Study by the Study Organizer, the Study Team, or the Study Moderators for a number of reasons, such as:</p>
                        <ul>
                        <li>You did not follow the confidentiality requirements described below;</li>
                        <li>You missed Study visits or did not follow instructions of the Study Team</li>
                        <li>You no longer meet the criteria for participating in the Study;</li>
                        <li>The Study Team believes it’s no longer in your best interests to continue the Study; and
                        at the discretion of the Study Team for any other possible reasons.</li>
                        </ul>

                        <p style='margin-bottom:40px'>If you are removed from the Study, Study data collected up to that point may continue to
                        be used and kept as described in this Consent. You may request that your Study Data
                        be deleted, as stated above in the “What Data Rights Do I Have” section.</p>

                        <p><strong>DO I HAVE ANY OBLIGATIONS AT THE END OF PARTICIPATING IN THE STUDY?</strong></p>

                        <p>At the end of your time in the Study, you will be asked to follow directions from the
                        Study Team such as returning Study hardware to the Study Team and/or deleting Study
                        apps or other materials from your devices or systems.</p>

                        <p style='margin-bottom:40px'>If you withdraw or are removed from the Study, or as you complete your involvement
                        with the Study, you should follow study staff direction to wind-up your involvement in the
                        Study. This may involve you returning Study hardware to the Study Team and/or
                        deleting Study apps or other materials from your own devices or systems.</p>

                        <p><strong>&nbsp;</strong><strong>WHO CAN I TALK TO ABOUT THE STUDY?&nbsp; </strong></p>

                        <p>If a Study-related problem occurs, or If you want to voice complaints or concerns about
                        this Study, have questions not addressed by the Study Team, or have questions about
                        your general rights in this Study, please contact the following Study Lead at <u>jessica.tucker@telusinternational.com</u>. <em>&nbsp;</em></p>
                        <p style='margin-bottom:40px'>If you want to voice complaints or concerns about this Study, have questions not
                        addressed by the Study Team, or have questions about your general rights in this Study,
                        please contact the following Study Lead: Stefan Auer: <u>stefan.auer@apple.com</u></p>

                        <p><strong>&nbsp;</strong><strong>YOUR CONFIDENTIALITY OBLIGATIONS.&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>If you agree to participate in this Study, you must also agree to not disclose any
                        information from or about this Study with anyone outside of the Study Team, or Study
                        Moderators, except as listed in this Consent, without first obtaining approval from the
                        Study Lead. By agreeing to participate in this Study, you acknowledge that any
                        information about this Study, including any Study details or the fact of your participation,
                        are considered Apple confidential information, and are covered by the obligations under
                        your agreements with Apple.</p>

                        <p><strong>WHAT IS CONSIDERED CONFIDENTIAL?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>The fact that the Study Organizer and the Study Sponsor are conducting this Study, the
                        types and methods of data collection, and any other detail about the Study or how it is
                        conducted are confidential. Any information that you learn about this Study, including
                        technical information and any other information identified as non-public information is
                        considered confidential and proprietary information that belongs to Study Sponsor and
                        must not be disclosed by you.</p>

                        <p><strong>WHO NEEDS TO KNOW?&nbsp; </strong></p>
                        <p style='margin-bottom:40px'>Do not assume that anyone knows, or needs to know, information about this Study. Do
                        not talk to anyone about this Study with anyone outside of the Study Team except with:
                        Your medical providers if needed to determine whether it is safe for you to participate in
                        this Study or if you believe you may have been injured as a result of this Study;
                        Family members or individuals you live with as needed for remote elements of Study
                        participation; and
                        Family members if you have concerns about participating in this Study. If you decide it’s
                        necessary to discuss this Study with anyone, you must first obtain agreement from them
                        not to share any information about this Study, including your participation in the Study.</p>

                        <p><strong>NO DISCLOSURES, PHOTOS, VIDEOS OR SOCIAL MEDIA.</strong></p>
                        <p>You will not be permitted to take any photographs or video of anything related to this Study. You should never post anything about this Study on social media.</p>
                        <p>If you become aware of any unauthorized disclosure of confidential information, including a disclosure by a family member or other individual, please report it immediately to a member of the Study Team, or to a Study Moderator.&nbsp;</p>
                        <p>If you have any questions that are not addressed here, please discuss with a member of
                        the Study Team, or a Study Moderator. Nothing in this Consent prohibits you from
                        speaking freely about your wages, hours, and working conditions.</p>`
                        + `</div>`
                }, {
                    type: "html",
                    html: `<p><span style="text-decoration: underline;"><strong>CONSENT</strong></span></p>
                    <p><span style="font-weight: 400;">By signing this Consent, I acknowledge and agree:&nbsp;</span></p>
                    <ul>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I have carefully read this Consent, which is written in English, and English is a language that I read and understand.&nbsp;</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I have received answers to my questions.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I am voluntarily signing this Consent and I consent to participate in this Study.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I agree that I will keep confidential all information disclosed to me during the Study.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I agree to the collection, use, sharing, disclosure, transfer, including transfer to other
                    countries, and maintenance of my Study Data (including my Sensitive Personal Data
                    and Coded Study Data) as described in this Consent.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I understand that I can stop being in this Study at any time.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I understand that I will receive a copy of this Consent after I sign it.</span></li>
                    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">I am over the age of 18 years old.&nbsp;</span></li>
                    </ul>
                    <p><span style="font-weight: 400;">If this is an electronic consent, I understand that by clicking accept or typing my name
                    and the date below I am providing my consent electronically and that it has the same
                    force and effect as if I was signing in person on paper.</span></p>`
                }, {
                    name: "agreementConfirmation",
                    title: "\n",
                    type: "checkbox",
                    choices: [
                        'Accept',
                    ],
                    isRequired: true
                }, {
                    name: "signatureFirstName",
                    title: "First name:",
                    type: "text",
                    isRequired: true,
                    visibleIf: "{agreementConfirmation} notempty"
                }, {
                    name: "signatureLastName",
                    title: "Last name:",
                    type: "text",
                    isRequired: true,
                    startWithNewLine: false,
                    visibleIf: "{agreementConfirmation} notempty"
                }, {
                    name: "Date",
                    title: "Signature Date",
                    type: "text",
                    inputType: "date",
                    defaultValueExpression: "today()",
                    minValueExpression: "today()",
                    isRequired: true,
                    startWithNewLine: false,
                    readOnly: true,
                    visibleIf: "{agreementConfirmation} notempty"

                }, {
                    type: "signaturepad",
                    name: "signature",
                    title: "Signature",
                    signatureWidth: 700,
                    signatureHeight: 400,
                    penColor: "black",
                    isRequired: true,
                    visibleIf: "{agreementConfirmation} notempty"
                }]
            }]
        }
    ],

};
