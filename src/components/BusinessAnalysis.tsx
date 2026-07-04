import React from "react";
import peopleFlowMap from '../assets/images/people_flow_map.png';
import isTripRate from '../assets/images/is_trip_rate.png';
import mgm from '../assets/images/mgm.png';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import Showcase, { ShowcaseItem } from "./Showcase";

const tags: Record<string, string[]> = {
    'people-flow-map': ["Tableau", "Geospatial", "Dispatch"],
    'is-trip-rate': ["Non-linear", "Smoothing", "Elasticity"],
    'mgm-analysis': ["SNA", "Centrality", "Simulation"],
};

function BusinessAnalysis() {
    const { language } = useLanguage();
    const t = translations[language].analysis;

    const analysisData: ShowcaseItem[] = [
        {
            id: 'people-flow-map', title: t.people_flow.title, image: peopleFlowMap, tags: tags['people-flow-map'],
            shortDescription: t.people_flow.short, fullDescription: t.people_flow.full,
        },
        {
            id: 'is-trip-rate', title: t.trip_rate.title, image: isTripRate, tags: tags['is-trip-rate'],
            shortDescription: t.trip_rate.short, fullDescription: t.trip_rate.full,
        },
        {
            id: 'mgm-analysis', title: t.mgm.title, image: mgm, tags: tags['mgm-analysis'],
            shortDescription: t.mgm.short, fullDescription: t.mgm.full,
        },
    ];

    return <Showcase id="business-analysis" title={t.title} items={analysisData} />;
}

export default BusinessAnalysis;
