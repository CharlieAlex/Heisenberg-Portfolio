import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaMedium } from 'react-icons/fa6';
import '../assets/styles/Main.scss';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

const FaMediumIcon = FaMedium as any;


function Main() {
  const { language } = useLanguage();
  const t = translations[language].main;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/head.jpg')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMediumIcon/></a>
          </div>
          <h1>{t.name}</h1>
          <p>{t.title}</p>
          <p style={{fontSize: '1em', marginTop: '10px'}}>{t.description}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMediumIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;