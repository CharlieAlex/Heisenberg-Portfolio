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
            title: t.ml_tuning.title,
            fileName: "機器學習調參指南.md",
            description: t.ml_tuning.desc
        },
        {
            title: t.problem_solving.title,
            fileName: "麥肯錫解決問題七步驟_教學版.md",
            description: t.problem_solving.desc
        },
        {
            title: t.scm.title,
            fileName: "因果推論 Structural Causal Model.md",
            description: t.scm.desc
        },
        {
            title: t.tree_model.title,
            fileName: "樹模型演算法講義.md",
            description: t.tree_model.desc
        },
        {
            title: t.git.title,
            fileName: "Git 進階課程.md",
            description: t.git.desc
        },
        {
            title: t.note_taking.title,
            fileName: "知識管理方法論-如何做好筆記.md",
            description: t.note_taking.desc
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
            <hr style={{ width: '100%', margin: '0 auto', border: '0', borderTop: '1px solid var(--line)', marginTop: '3rem' }} />
        </div>
    );
}

export default Teaching;
