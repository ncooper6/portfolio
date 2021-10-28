import React from 'react'
import './pageStyles.css'

const AntiSmoking = () => {
    return (
        <div className="page-wrapper">
            <div className="item-hero">
                <img src="../../images/workHeros/QuitSmokingApp.webp" alt="" />
                <div className="hero-text" id="smokingHero-text">
                    <h1>QUIT SMOKING APP</h1>
                    <h2>Apply UXD methods to research, design and simulate an experimental small-scale application.</h2>
                </div>
            </div>
            <div className="item-content">

                    <div className="item-section">
                        <div className="item-heading">
                            The Client
                        </div>
                        <p>This project was undertaken as a UCLan 3rd Year Project for the module User Experience Design. There was no live client and the user base was simulated although real interviews took place.</p>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            Project Summary
                        </div>
                        <div className="project-container">
                            <div className="cont-left">
                                <h3>About the Project</h3>
                                <p>This was a solo project aimed at showing empathy for a targeted user group through user experience design. </p>
                                <p>I chose to design an application and prototype that aids people in quitting smoking.</p>
                            </div>
                            <div className="cont-right-top">
                                <h3>My Role</h3>
                                <p>As this was a solo project it required me to undertake every role within then development life cycle of an application</p>
                            </div>
                            <div className="cont-right-bottom">
                                <h3>Project Duration</h3>
                                <p>6th Nov 2020 – 30th Apr 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            The Problem
                        </div>
                        <p>Smoking is an addiction and quitting any addiction is going to be hard, so users needed to feel cared about and provided with motivation to reach their goal.</p>
                        <p>Another challenge was understanding the diverse target audience and their pain points with the current process of quitting. </p>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            The Solution
                        </div>
                        <p>As this was a full solo project, I oversaw every aspect of the process. Initially I undertook user research to determine the target audience and their needs.</p>
                        <p>Using NHS and ONS data I chose to target the ages ranging from 14-60. This is because although the legal age is 18 there is a prevalence for underage smoking in the UK.</p>
                        <p>The next stage was scenario development to create a situation in which a user would use the application, helping me as a designer understand users’ motivations, when and where they will use the application and any pain points, they experience attempting to quit.</p>
                        <p>After the scenario was created, I produced personas of fictional characters to further aid in identifying users’ and potential needs. Seeing users’ current behaviours and their goals for the application helps to develop it further.</p>
                        <img src="../../images/workImages/smokingImages/persona1.webp" alt="" />
                        <p>I then created a short storyboard to show greater detail about how one of the personas may interact with the app and how they plan to use it to achieve their goals.</p>
                        <img src="../../images/workImages/smokingImages/storyboard.webp" alt="" />
                        <p>I created a site map to help list the features that I intended to include in the design and created a rough set of groups. These groups will be the pages in which users can navigate to and find the required feature.</p>
                        <img src="../../images/workImages/smokingImages/sitemap.webp" alt="" />
                        <p>User interviews really helped to shape the application and consolidate the features that were deemed most important and necessary for a successful application. </p>
                        <p>Once the user research was complete, I created three low fidelity wireframes for potential homepage layouts with pen and paper and then listed both negatives and positives for each, this helped determine which one was most viable. </p>
                        <p>Once the user research was complete it was time to start designing the application. I created low fidelity wireframes on pen and paper to quickly iterate through multiple designs/layouts</p>
                        <img src="../../images/workImages/smokingImages/paperWF.webp" alt="" />
                        <p>I then digitalised the three layouts and created medium fidelity wireframes, compared the negatives and positives from user review and decided on one layout to move forward with. </p>
                        <img src="../../images/workImages/smokingImages/digitalWF.webp" alt="" />
                        <p>The layout and style were the used to create low and medium fidelity wireframes for the remaining pages necessary for an MVP that is ready to test with users.  </p>
                        <p>The homepage includes users craving history and the ability to get craving help as this needs to be accessed quickly in the case of users experiencing withdrawal symptoms. </p>
                        <p>Once the homepage was decided on the other sections were created this includes the progress section allowing users to keep track of how far they are along their 30 days of quitting, how much money they have saved and how many cigarettes they have avoided.</p>
                        <p>The support section allows users to interact with a qualified expert which is placed at the top of the page for ease of use. It also allows users to speak to a simple chat bot and other users on the application to get advice and motivate others going through the same experience. </p>
                        <p>The advice page contains simple facts and statistics used to further motivate users as to why they should quit and the benefits that come with it</p>
                        <img src="../../images/workImages/smokingImages/pagesSC.webp" alt="" />
                        <p>Due to the unforeseen circumstances around Covid-19, physical testing with multiple people was not possible and instead I conducted online tests using Loom and Figma. </p>
                        <p>User testing allowed potential users to experience the application which in turn allows designers to see any obvious issues or unexpected ways users interact with the product.</p>
                        <div>
                            <p>The testing involved asking the user to complete predetermined tasks allowing me to see how they interact with the application and point out any issues they experience. </p>
                            <p><b>Research findings:</b></p>
                            <ul className="lists">
                                <li>Most users felt that the support section’s name didn’t suit its function.</li>
                                <li>Some icons needed to be changed to better reflect the use of their assigned sections.</li>
                                <li>Minor adjustments to icon sizing were needed to ensure the prototype functioned better on mobile devices.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            Results
                        </div>
                        <p>To conclude, I believe the project to be a success, it encapsulates multiple UXD methods to understand the potential user base and build a platform in which they their needs were put at the forefront of the application design. </p>
                    </div>
            </div>
        </div>
    )
}

export default AntiSmoking
