import React from "react";
import parking1 from '../assets/images/parking1.png';
import totalResult from '../assets/images/total_result.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://parkfinder.streamlit.app/" target="_blank" rel="noreferrer"><img src={parking1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://parkfinder.streamlit.app/" target="_blank" rel="noreferrer"><h2>ParkFinder</h2></a>
                <p>Real-time query, tracking, and statistical analysis of available parking spaces in Taipei City. We retrieve parking data, aggregate availability for fixed time periods, and offer interactive visualization tools.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={totalResult} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Sports Betting Freerider</h2></a>
                <p>Elevate the Betting Game with Data-Backed Strategies. A web scraping system that captures prediction results from top-ranking players and provides statistical analyses of prediction accuracy.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;