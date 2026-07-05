import React from "react";
import parking1 from '../assets/images/parking1.png';
import totalResult from '../assets/images/streamlit_dashboard.png';
import mlAnalysisDashboard from '../assets/images/ml-analysis-dashboard.png';
import japanAdventure from '../assets/images/japan_adventure.png';
import tripLedger from '../assets/images/trip-ledger-ai.png';
import ragGraph from '../assets/images/rag-graph.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import Showcase, { ShowcaseItem } from "./Showcase";

const tags: Record<string, string[]> = {
    box_note_rag: ["LangGraph", "RAG", "BM25", "HyDE", "Ollama"],
    trip_ledger: ["Gemini", "HuggingFace", "OCR", "Streamlit"],
    shopping_adventure: ["Firebase", "Firestore", "React", "Vercel"],
    ml_analysis: ["SHAP", "Streamlit", "scikit-learn"],
    parkfinder: ["Data Pipeline", "Streamlit", "Gov API"],
    betting: ["LINE Bot", "BigQuery", "Crawler"],
};

function Project() {
    const { language } = useLanguage();
    const t = translations[language].projects;

    const github = (href: string) => ({
        label: t.visit_github, href, icon: <GitHubIcon />,
    });
    const app = (href: string) => ({
        label: t.visit_app, href, primary: true, icon: <LaunchIcon />,
    });

    const projectData: ShowcaseItem[] = [
        {
            id: 'box_note_rag', title: t.box_note_rag.title, image: ragGraph, tags: tags.box_note_rag,
            shortDescription: t.box_note_rag.short, fullDescription: t.box_note_rag.full,
            actions: [github(t.box_note_rag.github)],
        },
        {
            id: 'trip_ledger', title: t.trip_ledger.title, image: tripLedger, tags: tags.trip_ledger,
            shortDescription: t.trip_ledger.short, fullDescription: t.trip_ledger.full,
            actions: [app(t.trip_ledger.link), github(t.trip_ledger.github)],
        },
        {
            id: 'shopping_adventure', title: t.shopping_adventure.title, image: japanAdventure, tags: tags.shopping_adventure,
            shortDescription: t.shopping_adventure.short, fullDescription: t.shopping_adventure.full,
            actions: [app(t.shopping_adventure.link), github(t.shopping_adventure.github)],
        },
        {
            id: 'ml_analysis', title: t.ml_analysis.title, image: mlAnalysisDashboard, tags: tags.ml_analysis,
            shortDescription: t.ml_analysis.short, fullDescription: t.ml_analysis.full,
            actions: [app(t.ml_analysis.link), github(t.ml_analysis.github)],
        },
        {
            id: 'parkfinder', title: t.parkfinder.title, image: parking1, tags: tags.parkfinder,
            shortDescription: t.parkfinder.short, fullDescription: t.parkfinder.full,
            actions: [app(t.parkfinder.link), github(t.parkfinder.github)],
        },
        {
            id: 'betting', title: t.betting.title, image: totalResult, tags: tags.betting,
            shortDescription: t.betting.short, fullDescription: t.betting.full,
            actions: [app(t.betting.link), github(t.betting.github)],
        },
    ];

    return <Showcase id="projects" eyebrow={t.eyebrow} title={t.title} items={projectData} />;
}

export default Project;
