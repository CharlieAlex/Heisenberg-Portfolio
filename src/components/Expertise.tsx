import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "TensorFlow",
    "Machine Learning",
    "Statistical Analysis"
];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "Google Cloud",
    "BigQuery",
    "Airflow",
    "dbt",
    "Spark"
];

const labelsThird = [
    "Causal Inference",
    "Econometrics",
    "A/B Testing",
    "Game Theory",
    "Social Network Analysis",
    "EconML",
    "Time Series Analysis"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>Proficient in building predictive models and conducting statistical analysis. I transform raw data into actionable insights using various machine learning algorithms and data visualization techniques.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & Cloud</h3>
                    <p>Experienced in building data pipelines, ETL processes, and deploying machine learning models on cloud platforms. I ensure data quality and accessibility for downstream analytics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFlask} size="3x"/>
                    <h3>Economics & Causal Inference</h3>
                    <p>Strong foundation in econometrics and causal inference methods. I design and analyze experiments to measure true impact and guide data-driven decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
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