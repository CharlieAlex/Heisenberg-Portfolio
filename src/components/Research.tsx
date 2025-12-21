import React from "react";
import thesis from '../assets/images/100day_1.png';
import trendTCE from '../assets/images/Trend_TCE.png';
import laborDivision from '../assets/images/labor_division.png';
import '../assets/styles/Project.scss';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

function Research() {
    const { language } = useLanguage();
    const t = translations[language].research;

    return(
    <div className="projects-container" id="research">
        <h1>{t.title}</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/thesis.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={thesis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/thesis.pdf"} target="_blank" rel="noreferrer"><h2>{t.thesis.title}</h2></a>
                <p>{t.thesis.desc}</p>
            </div>
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/labor_final.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={trendTCE} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/labor_final.pdf"} target="_blank" rel="noreferrer"><h2>{t.pension.title}</h2></a>
                <p>{t.pension.desc}</p>
            </div>
            <div className="project">
                <a href={process.env.PUBLIC_URL + "/paper/applied_econ_final.pdf"} target="_blank" rel="noreferrer" className="project-img-wrapper"><img src={laborDivision} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={process.env.PUBLIC_URL + "/paper/applied_econ_final.pdf"} target="_blank" rel="noreferrer"><h2>{t.labor.title}</h2></a>
                <p>{t.labor.desc}</p>
            </div>
        </div>
    </div>
    );
}

export default Research;
