import React from "react";
import '../assets/styles/Teaching.scss';
import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

function Teaching() {
    const { language } = useLanguage();
    const t = translations[language].teaching;

    const teachingData = [
        {
            title: t.git.title,
            fileName: "Git 進階課程.md",
            description: t.git.desc
        },
        {
            title: t.ml_tuning.title,
            fileName: "機器學習(非深度學習)調參指南.md",
            description: t.ml_tuning.desc
        }
    ];

    return (
        <div className="teaching-container" id="teaching">
            <h1>{t.title}</h1>
            <div className="teaching-grid">
                {teachingData.map((item, index) => (
                    <div className="teaching-item" key={index}>
                        <Link to={`/teaching/${item.fileName}`}>
                            <h2>{item.title}</h2>
                        </Link>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc', marginTop: '3rem' }} />
        </div>
    );
}

export default Teaching;
