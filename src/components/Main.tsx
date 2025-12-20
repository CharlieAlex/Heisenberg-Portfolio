import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaMedium } from 'react-icons/fa';
import '../assets/styles/Main.scss';

function Main() {

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
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMedium/></a>
          </div>
          <h1>羅偉駿 Alex Lo</h1>
          <p>Data Analyst | Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CharlieAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@jasonlo1468" target="_blank" rel="noreferrer"><FaMedium/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;