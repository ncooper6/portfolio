import React from 'react'
import './pageStyles.css'

const DashboardNHS = () => {
    return (
        <div className="page-wrapper">
            <div className="item-hero">
                <img src="../../images/workHeros/NHSdashboard.webp" alt="" />
                <div className="hero-text" id="nhsHero-text">
                    <h1>INTELLIGENT HOSPITAL</h1>
                    <h2>A project to take an existing excel based bed management system and create an initial visual data dashboard </h2>
                </div>
            </div>
            <div className="item-content">

                    <div className="item-section">
                        <div className="item-heading">
                            The Client
                        </div>
                        <p>This project was undertaking during an internship with UCLan. During this internship we worked alongside the East Lancashire Hospitals NHS Trust.</p>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            Project Summary
                        </div>
                        <div className="project-container">
                            <div className="cont-left">
                                <h3>About the Project</h3>
                                <p>This project was completed during an internship with the University of Central Lancashire’s MedTech Department. </p> 
                                <p>The East Lancashire Hospitals NHS Trust requested our assistance in upgrading their current bed management system and improving the visualisation with the aim of reducing users’ cognitive load.   </p>
                            </div>
                            <div className="cont-right-top">
                                <h3>My Role</h3>
                                <p>As an intern my roles included initial research and prototyping. </p>
                                <p>It also involved module design and design system creation. </p>
                            </div>
                            <div className="cont-right-bottom">
                                <h3>Project Duration</h3>
                                <p>3rd May 21 - 2nd July 21</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            The Problem
                        </div>
                        <p>Our greatest challenge was identifying the different user groups and how they interact with the current bed management system as it has over thirty individual information blocks within the dashboard. With so many blocks, we also needed to work out which order was most effective. </p>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            The Solution
                        </div>
                        <p>At the start of the project, we were provided with an example of the current system in place. The system was currently an excel file with over thirty different blocks representing data for different departments.</p>
                        <img src="../../images/workImages/nhsImages/excelSC.webp" alt="" />
                        <div>
                            <p>To further understand the document, we organised interviews with the bed management team and nurses that use the document daily. </p>
                            <ul className="lists">
                                <li>We discovered that a lot of the content is aimed for management and doesn’t get checked during multiple daily meetings.</li>
                                <li>There is no specific order to how it needs to be organised or structured.</li>
                                <li>We also learnt the type of interfaces they already use when attending to patients.</li>
                            </ul>
                        </div>
                        <p>From the interviews that took place we decided my next task was to further research current dashboards in use within the NHS and their current style guide. This allows users to understand the dashboard easier as it would share similarities to systems they frequently use. </p>
                        <div>
                            <p>From this research, we decided to move forward with a grid based modular dashboard. To work out block sizing and content I broke down current block to their core and created a table for each:</p>
                            <ul className="lists">
                                <li>The section Name</li>
                                <li>A short description </li>
                                <li>The current Excel block </li>
                                <li>A glossary of terms used</li>
                                <li>The data types used</li>
                                <li>Possible ways to visualise</li>
                                <li>The size of the block in our proposed grid.</li>
                            </ul>
                            <img src="../../images/workImages/nhsImages/blockSChoriz.webp" alt="" />
                        </div>
                        <p>This breakdown allowed us collectively to begin creating reusable assets based on the necessary data types and in turn create a basic design system.</p>
                        <p>We then created blocks tailored to each section using the patterns created previously and added unique aspects for the module at hand.</p>
                        <img src="../../images/workImages/nhsImages/moduleBlock.webp" alt="" />
                        <p>Once the process of creating the blocks was completed, we focused our efforts on the layout and flow of the blocks within the grid-based dashboard.  </p>
                    </div>

                    <div className="item-section">
                        <div className="item-heading">
                            Results
                        </div>
                        <p>Unfortunately, due to the additional stresses disruption and restrictions arising from Covid-19 within the trust, we were unable to interact as effectively as we would of liked with end users. This had a significant impact on the quality of the project rendering it less successful than we had hoped it would be within the time restraints given to us. </p>
                        <p>However, I still gained significant knowledge from this experience including how effective it is to give users options when providing assets to be reviewed. This can help to quickly progress the task when meetings are often impromptu and short. </p>
                        <p>I also learnt the importance of setting deadlines and goals throughout the project to ensure success and keep within the time constraints.</p>
                    </div>
            </div>
        </div>
    )
}

export default DashboardNHS
