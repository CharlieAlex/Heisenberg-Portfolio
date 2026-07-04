import React from "react";
import thesis from '../assets/images/100day_1.png';
import trendTCE from '../assets/images/Trend_TCE.png';
import laborDivision from '../assets/images/labor_division.png';
import ArticleIcon from '@mui/icons-material/Article';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import Showcase, { ShowcaseItem } from "./Showcase";

const tags: Record<string, string[]> = {
    thesis: ["Event Study", "Admin Data", "Causal"],
    pension: ["DiD", "Quasi-experiment", "Placebo"],
    labor: ["Ordered Probit", "TSCS", "Gender"],
};

function Research() {
    const { language } = useLanguage();
    const t = translations[language].research;
    const viewPaper = language === 'en' ? 'View Paper' : '查看論文';

    const paper = (link: string) => ({
        label: viewPaper,
        href: process.env.PUBLIC_URL + link,
        primary: true,
        icon: <ArticleIcon />,
    });

    const researchData: ShowcaseItem[] = [
        {
            id: 'thesis', title: t.thesis.title, image: thesis, tags: tags.thesis,
            shortDescription: t.thesis.short, fullDescription: t.thesis.full,
            actions: [paper(t.thesis.link)],
        },
        {
            id: 'pension', title: t.pension.title, image: trendTCE, tags: tags.pension,
            shortDescription: t.pension.short, fullDescription: t.pension.full,
            actions: [paper(t.pension.link)],
        },
        {
            id: 'labor', title: t.labor.title, image: laborDivision, tags: tags.labor,
            shortDescription: t.labor.short, fullDescription: t.labor.full,
            actions: [paper(t.labor.link)],
        },
    ];

    return <Showcase id="research" title={t.title} items={researchData} />;
}

export default Research;
