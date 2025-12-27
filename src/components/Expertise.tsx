import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

const labelsFirst = [
    "Python",
    "SQL",
    "Tableau",
    "Scikit-learn",
    "StatisticalAnalysis",
    "GameTheory",
    "SocialNetworkAnalysis",
    "LinearProgramming"
];

const labelsSecond = [
    "A/B Testing",
    "CausalInference",
    "Econometrics",
    "EconML",
    "CDP"
];

const labelsThird = [
    "Git",
    "MLflow",
    "Docker",
    "Airflow",
    "AppsScript",
    "Streamlit",
    "BigQuery"
];

function Expertise() {
    const { language } = useLanguage();
    const t = translations[language].expertise;

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.title}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>{t.decision_science.title}</h3>
                    <p>{t.decision_science.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.tech_stack}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFlask} size="3x"/>
                    <h3>{t.causal_analysis.title}</h3>
                    <p>{t.causal_analysis.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.tech_stack}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>{t.analytics_engineering.title}</h3>
                    <p>{t.analytics_engineering.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.tech_stack}</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc' }} />
    </div>
    );
}

export default Expertise;