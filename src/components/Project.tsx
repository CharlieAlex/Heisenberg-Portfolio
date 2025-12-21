import React from "react";
import parking1 from '../assets/images/parking1.png';
import totalResult from '../assets/images/total_result.png';
import '../assets/styles/Project.scss';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

function Project() {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return(
    <div className="projects-container" id="projects">
        <h1>{t.title}</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://parkfinder.streamlit.app/" target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={parking1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://parkfinder.streamlit.app/" target="_blank" rel="noreferrer"><h2>{t.parkfinder.title}</h2></a>
                <p>{t.parkfinder.desc}</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing" target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={totalResult} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>{t.betting.title}</h2></a>
                <p>{t.betting.desc}</p>
            </div>
        </div>
        <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc' }} />
    </div>
    );
}

export default Project;