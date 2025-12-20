import React from "react";
import '../assets/styles/Teaching.scss';
import { Link } from 'react-router-dom';

function Teaching() {
    const teachingData = [
        {
            title: "Git Advanced Course",
            fileName: "Git 進階課程.md",
            description: "An advanced guide to Git version control, covering branching strategies, conflict resolution, and best practices."
        },
        {
            title: "Machine Learning Hyperparameter Tuning Guide",
            fileName: "機器學習(非深度學習)調參指南.md",
            description: "A comprehensive guide to hyperparameter tuning for non-deep learning models, focusing on practical techniques and strategies."
        }
    ];

    return (
        <div className="teaching-container" id="teaching">
            <h1>Teaching</h1>
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
