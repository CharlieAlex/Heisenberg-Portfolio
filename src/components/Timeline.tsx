import React, { useState } from "react";
import '../assets/styles/Timeline.scss';
import yulonLogo from '../assets/images/yulon_logo.png';
import shopeeLogo from '../assets/images/shopee_logo.png';
import spxLogo from '../assets/images/spx_logo.png';
import fccLogo from '../assets/images/fcc_logo.webp';
import ntuLogo from '../assets/images/ntu_logo.jpg';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import SectionTitle from "./SectionTitle";

interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  start: number;
  end: number;
  present?: boolean;
  logo: string;
  title: string;
  subtitle: string;
  dates: string;
  summary: string;
  details: string[];
}

const AXIS_MIN = 2016;
const AXIS_MAX = 2027;
const TICKS = [2016, 2018, 2020, 2022, 2024, 2026];
const pct = (year: number) => ((year - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100;

function Timeline() {
  const { language } = useLanguage();
  const t = translations[language].career;
  const [active, setActive] = useState(0);

  const items: TimelineItem[] = [
    { id: 'yulon', type: 'work', start: 2024.42, end: 2026.5, present: true, logo: yulonLogo,
      title: t.yulon.title, subtitle: t.yulon.subtitle, dates: t.yulon.date,
      summary: t.yulon.summary, details: t.yulon.details },
    { id: 'shopee-xpress', type: 'work', start: 2022.67, end: 2023.17, logo: spxLogo,
      title: t.shopee_xpress.title, subtitle: t.shopee_xpress.subtitle, dates: '2022.9 - 2023.3',
      summary: t.shopee_xpress.summary, details: t.shopee_xpress.details },
    { id: 'shopee-cb', type: 'work', start: 2022.17, end: 2022.58, logo: shopeeLogo,
      title: t.shopee_cb.title, subtitle: t.shopee_cb.subtitle, dates: '2022.3 - 2022.8',
      summary: t.shopee_cb.summary, details: t.shopee_cb.details },
    { id: 'ntu-master', type: 'education', start: 2021.67, end: 2023.42, logo: ntuLogo,
      title: t.ntu_master.title, subtitle: t.ntu_master.subtitle, dates: '2021.9 - 2023.6',
      summary: t.ntu_master.summary, details: t.ntu_master.details },
    { id: 'fcc', type: 'work', start: 2019.17, end: 2019.58, logo: fccLogo,
      title: t.fcc.title, subtitle: t.fcc.subtitle, dates: '2019.3 - 2019.8',
      summary: t.fcc.summary, details: t.fcc.details },
    { id: 'ntu-bachelor', type: 'education', start: 2016.67, end: 2021.42, logo: ntuLogo,
      title: t.ntu_bachelor.title, subtitle: t.ntu_bachelor.subtitle, dates: '2016.9 - 2021.6',
      summary: t.ntu_bachelor.summary, details: t.ntu_bachelor.details },
  ];

  const current = items[active];

  return (
    <div id="history">
      <div className="items-container">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} />

        <div className="gantt-split">
          <div className="gantt">
            <div className="gantt-axis">
              {TICKS.map((y) => (
                <span key={y} className="tick" style={{ left: `${pct(y)}%` }}>{y}</span>
              ))}
            </div>
            <div className="gantt-grid">
              {TICKS.map((y) => (
                <span key={y} className="gline" style={{ left: `${pct(y)}%` }} />
              ))}
            </div>

            <div className="gantt-rows">
              {items.map((d, i) => (
                <div
                  key={d.id}
                  className={`gantt-row ${active === i ? 'active' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                >
                  <div className="rlabel">
                    <img className="rlogo" src={d.logo} alt="" />
                    <div className="rmeta">
                      <div className="role">{d.title}</div>
                      <div className="date">{d.dates}</div>
                    </div>
                  </div>
                  <div className="rtrack">
                    <span
                      className={`bar ${d.type} ${d.present ? 'present' : ''}`}
                      style={{ left: `${pct(d.start)}%`, width: `${pct(d.end) - pct(d.start)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="gantt-legend">
              <span><i className="w" />{t.legend_work}</span>
              <span><i className="e" />{t.legend_edu}</span>
            </div>
          </div>

          <div className="gantt-detail">
            <div className="gantt-detail-inner" key={active}>
              <h3>{current.title}</h3>
              <div className="meta">{current.subtitle} · {current.dates}</div>
              <div className="chips">
                {current.summary.split(',').map((s, k) => (
                  <span key={k} className="chip">{s.trim()}</span>
                ))}
              </div>
              <ul>
                {current.details.map((detail, k) => (
                  <li key={k}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '1px solid var(--line)' }} />
    </div>
  );
}

export default Timeline;
