import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaMedium } from 'react-icons/fa6';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import '../assets/styles/Footer.scss'

const FaMediumIcon = FaMedium as any;


function Footer() {
  const { language } = useLanguage();
  const t = translations[language].navigation;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <button className="back-to-top" onClick={scrollToTop}>
        <KeyboardArrowUpIcon fontSize="large" />
        <span>{t.back_to_top}</span>
      </button>
      <div className="social-links">
        <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMediumIcon size={24}/></a>
      </div>
      <p>Contact me: charliealex0101@gmail.com</p>
    </footer>
  );
}

export default Footer;