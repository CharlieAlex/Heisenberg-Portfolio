import React from "react";
import '../assets/styles/SectionTitle.scss';

interface SectionTitleProps {
    eyebrow: string;
    title: string;
}

function SectionTitle({ eyebrow, title }: SectionTitleProps) {
    return (
        <div className="section-title">
            <span className="st-eyebrow">{eyebrow}</span>
            <h1 className="st-title">{title}<span className="st-dot">.</span></h1>
        </div>
    );
}

export default SectionTitle;
