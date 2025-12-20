import React from "react";
import thesis from '../assets/images/100day_1.png';
import trendTCE from '../assets/images/Trend_TCE.png';
import laborDivision from '../assets/images/labor_division.png';
import '../assets/styles/Project.scss';

function Research() {
    return(
    <div className="projects-container" id="research">
        <h1>Research</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/thesis.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={thesis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/thesis.pdf"} target="_blank" rel="noreferrer"><h2>Parental Death & Marital Decisions</h2></a>
                <p>The Effects of Parental Death on Offspring's Marital Decisions: Evidence from Taiwan. A Pioneering Study using Event Study Method.</p>
            </div>
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/labor_final.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={trendTCE} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/labor_final.pdf"} target="_blank" rel="noreferrer"><h2>National Pension Reform</h2></a>
                <p>How does National Pension Reform affect household economic behaviors? Evidence from Taiwan using Difference-in-Differences method.</p>
            </div>
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/applied_econ_final.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={laborDivision} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/applied_econ_final.pdf"} target="_blank" rel="noreferrer"><h2>Division of Unpaid Labor</h2></a>
                <p>What is the cause and effect of the domestic division of unpaid labor? Evidence from Taiwanese Family using Ordered Probit model.</p>
            </div>
        </div>
    </div>
    );
}

export default Research;
