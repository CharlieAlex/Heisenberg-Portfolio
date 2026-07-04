import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PortraitIcon from '@mui/icons-material/Portrait';
import { FaMedium } from 'react-icons/fa6';
import '../assets/styles/Main.scss';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

const FaMediumIcon = FaMedium as any;
const ImProfileIcon = PortraitIcon as any;


function Main() {
  const { language } = useLanguage();
  const t = translations[language].main;

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/charliealex123/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer" aria-label="Medium"><FaMediumIcon/></a>
            <a href={process.env.PUBLIC_URL + (language === 'en' ? "/cv/myCV_en.pdf" : "/cv/myCV.pdf")} target="_blank" rel="noreferrer" aria-label="Resume"><ImProfileIcon/></a>
          </div>
          <h1>{t.name}</h1>
          <p className="role">{t.title}</p>
          <p>{t.description}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/charliealex123/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer" aria-label="Medium"><FaMediumIcon/></a>
            <a href={process.env.PUBLIC_URL + (language === 'en' ? "/cv/myCV_en.pdf" : "/cv/myCV.pdf")} target="_blank" rel="noreferrer" aria-label="Resume"><ImProfileIcon/></a>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="img-container">
            <img src={require('../assets/images/head.jpg')} alt="Portrait of Heisenberg Lo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;