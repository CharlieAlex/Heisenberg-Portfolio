import React from "react";
import '../assets/styles/Honors.scss';
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Honors() {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].honors;
  const isDark = mode === 'dark';

  const awards = [
    {
      id: 'award1',
      title: t.award1.title,
      subtitle: t.award1.subtitle,
      date: t.award1.date,
      icon: <WorkspacePremiumIcon fontSize="large" />,
    },
    {
       id: 'award2',
       title: t.award2.title,
       subtitle: t.award2.subtitle,
       date: t.award2.date,
       icon: <SchoolIcon fontSize="large" />,
    },
    {
       id: 'award3',
       title: t.award3.title,
       subtitle: t.award3.subtitle,
       date: t.award3.date,
       icon: <StarIcon fontSize="large" />,
    },
     {
        id: 'award4',
        title: t.award4.title,
        subtitle: t.award4.subtitle,
        date: t.award4.date,
        icon: <SchoolIcon fontSize="large" />,
     }
  ];

  return (
    <div className="honors-container" id="honors">
      <h1>{t.title}</h1>
      <div className="honors-list">
        {awards.map((award) => (
          <div key={award.id} className={`honor-item ${isDark ? 'dark' : ''}`}>
            <div className="honor-icon">
                {award.icon}
            </div>
            <div className="honor-content">
                <div className="honor-header">
                    <h3>{award.title}</h3>
                    <span className="honor-date">{award.date}</span>
                </div>
                <p>{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <hr style={{ width: '100%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc', marginTop: '3rem' }} />
    </div>
  );
}

export default Honors;
