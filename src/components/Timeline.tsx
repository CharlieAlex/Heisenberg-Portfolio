import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import yulonLogo from '../assets/images/yulon_logo.png';
import shopeeLogo from '../assets/images/shopee_logo.png';
import fccLogo from '../assets/images/fcc_logo.webp';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023.8 - present"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={yulonLogo} alt="Yulon" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Yulon Group, Taiwan</h4>
            <p>
              Causal Machine Learning, Machine Learning, Tableau Dashboard, A/B Testing, Data Pipeline, Statistical Analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022.9 - 2023.3"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={shopeeLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Shopee Xpress, Taiwan</h4>
            <p>
              SQL Data Reporting, Apps Script Automation, Dashboard Maintenance, Data Pipeline Construction
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022.3 - 2022.8"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={shopeeLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Logistics Analysis Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Shopee Cross Border, Taiwan</h4>
            <p>
              P&L Estimation, VBA Automation, Campaign Analytics, Impact Analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019.3 - 2019.8"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={fccLogo} alt="FCC Partners" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">FCC Partners Asia, Taiwan</h4>
            <p>
              Investment Teaser, Business Plan, Data Collection, Market Research
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;