import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaMedium } from 'react-icons/fa';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMedium size={24}/></a>
      </div>
      <p>Contact me: charliealex0101@gmail.com</p>
    </footer>
  );
}

export default Footer;