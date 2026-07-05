import React, { useState } from "react";
import '../assets/styles/Showcase.scss';
import { useLanguage } from "../contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

export interface ShowcaseAction {
    label: string;
    href: string;
    primary?: boolean;
    icon?: React.ReactNode;
}

export interface ShowcaseItem {
    id: string;
    title: string;
    image: string;
    tags: string[];
    shortDescription: string;
    fullDescription: string;
    actions?: ShowcaseAction[];
}

interface ShowcaseProps {
    id: string;
    eyebrow: string;
    title: string;
    items: ShowcaseItem[];
}

function Showcase({ id, eyebrow, title, items }: ShowcaseProps) {
    const { language } = useLanguage();
    const collapseLabel = language === 'en' ? 'collapse' : '收合';
    const projectWord = language === 'en' ? 'Project' : '項目';

    // Default: first item expanded
    const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
    const active = items.find((item) => item.id === openId) ?? null;
    const activeIndex = items.findIndex((item) => item.id === openId);

    const toggle = (itemId: string) => {
        setOpenId((current) => (current === itemId ? null : itemId));
    };

    return (
        <section className="showcase-container" id={id}>
            <hr className="section-divider" />
            <SectionTitle eyebrow={eyebrow} title={title} />

            <div className="showcase-grid">
                {items.map((item, i) => (
                    <button
                        type="button"
                        className={`showcase-cell${item.id === openId ? ' active' : ''}`}
                        key={item.id}
                        aria-expanded={item.id === openId}
                        onClick={() => toggle(item.id)}
                    >
                        <span className="sc-num">{String(i + 1).padStart(2, '0')}</span>
                        <h2>{item.title}</h2>
                        <span className="sc-meta">{item.tags.slice(0, 3).join(' · ')}</span>
                        <span className="sc-arrow" aria-hidden="true">▸</span>
                    </button>
                ))}
            </div>

            <div className={`showcase-detail${active ? ' open' : ''}`}>
                <div className="sc-detail-clip">
                    {active && (
                        <div className="showcase-panel">
                            <div className="sc-visual">
                                <img src={active.image} alt={active.title} />
                            </div>
                            <div className="sc-body-wrap" key={active.id}>
                                <div className="sc-kicker">
                                    {projectWord} {String(activeIndex + 1).padStart(2, '0')}
                                </div>
                                <h2>{active.title}</h2>
                                <div className="sc-tags">
                                    {active.tags.map((tag) => (
                                        <span className="sc-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <p className="sc-full">{active.fullDescription}</p>
                                <div className="sc-actions">
                                    {active.actions?.map((action) => (
                                        <a
                                            className={`sc-btn ${action.primary ? 'primary' : 'ghost'}`}
                                            key={action.label}
                                            href={action.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {action.icon}
                                            {action.label}
                                        </a>
                                    ))}
                                    <button
                                        type="button"
                                        className="sc-collapse"
                                        onClick={() => setOpenId(null)}
                                    >
                                        {collapseLabel} ▴
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Showcase;
