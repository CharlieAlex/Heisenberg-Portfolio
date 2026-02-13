import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PortraitIcon from '@mui/icons-material/Portrait';
import { FaMedium } from 'react-icons/fa6';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";
import '../assets/styles/Footer.scss'

const FaMediumIcon = FaMedium as any;
const ImProfileIcon = PortraitIcon as any;


function Footer() {
  const { language } = useLanguage();
  const t_nav = translations[language].navigation;
  const t_footer = translations[language].footer;

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
        <span>{t_nav.back_to_top}</span>
      </button>
      <div className="social-links">
        <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 28 }}/></a>
        <a href="https://www.linkedin.com/in/charliealex123/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 28 }}/></a>
        <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMediumIcon size={28}/></a>
        <a href={process.env.PUBLIC_URL + (language === 'en' ? "/cv/myCV_en.pdf" : "/cv/myCV.pdf")} target="_blank" rel="noreferrer"><ImProfileIcon size={28}/></a>
      </div>
      <p>{t_footer.contact_me}charliealex0101@gmail.com</p>
    </footer>
  );
}

export default Footer;