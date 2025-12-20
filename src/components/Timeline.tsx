
import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import yulonLogo from '../assets/images/yulon_logo.png';
import shopeeLogo from '../assets/images/shopee_logo.png';
import spxLogo from '../assets/images/spx_logo.webp';
import fccLogo from '../assets/images/fcc_logo.webp';
import ntuLogo from '../assets/images/ntu_logo.jpg';
import { Modal, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 'yulon',
    type: 'work',
    title: 'Data Analyst',
    subtitle: 'Yulon Group, Taiwan',
    date: '2023.8 - present',
    icon: <img src={yulonLogo} alt="Yulon" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'Causal Machine Learning, Machine Learning, Tableau Dashboard, A/B Testing, Data Pipeline, Statistical Analysis',
    details: [
      "Specialized in Causal Machine Learning and Statistical Analysis.",
      "Developed and maintained Tableau Dashboards for business intelligence.",
      "Designed and executed A/B Testing experiments.",
      "Built resilient Data Pipelines for data processing.",
      "Applied Machine Learning models to solve business problems."
    ]
  },
  {
    id: 'ntu-master',
    type: 'education',
    title: 'Master\'s Degree',
    subtitle: 'National Taiwan University, Economics',
    date: '2021.9 - 2023.6',
    icon: <img src={ntuLogo} alt="NTU" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'Machine Learning, Econometrics, Data Science',
    details: [
      "Overall GPA: 4.09/4.30",
      "Course Highlights: Machine Learning and Econometrics, Data Science and Social Inquiry, Applied Econometric Method, Industrial Organization and Firm Strategy"
    ]
  },
  {
    id: 'shopee-xpress',
    type: 'work',
    title: 'Data Engineer Intern',
    subtitle: 'Shopee Xpress, Taiwan',
    date: '2022.9 - 2023.3',
    icon: <img src={spxLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'SQL Data Reporting, Apps Script Automation, Dashboard Maintenance',
    details: [
      "Assisted other teams in utilizing SQL to query databases and developed 10+ fully automated dynamic data reports based on actual business needs.",
      "Optimized the data storage system for the inventory management department, replacing spreadsheet functions with Apps Script to increase page load speed by 100%+.",
      "Maintained dashboards for buyers and sellers, adding 3 key metrics and identifying 10+ existing errors.",
      "Constructed the data flow for the eco-package project, tracking the usage and lifecycle of each packaging unit to provide decision support for procurement and distribution."
    ]
  },
  {
    id: 'shopee-cross-border',
    type: 'work',
    title: 'Logistics Analysis Intern',
    subtitle: 'Shopee Cross Border, Taiwan',
    date: '2022.3 - 2022.8',
    icon: <img src={shopeeLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'P&L Estimation, VBA Automation, Campaign Analytics',
    details: [
      "Estimated and validated the P&L of 5+ cross-border free shipping campaigns with a scale of NT$ 1 M+, assisting in the formulation of activities to maximize profits.",
      "Tracked the performance of 3 cross-border seller programs, ensuring data integrity, and automated processes with VBA to reduce operational time by 50%+.",
      "Analyzed the impacts of relevant events such as the impact of customs real-name authentication, and the crowding-out effect of new logistics channels."
    ]
  },
  {
    id: 'ntu-bachelor',
    type: 'education',
    title: 'Double Bachelor\'s Degree',
    subtitle: 'National Taiwan University, Economics & Philosophy',
    date: '2016.9 - 2021.6',
    icon: <img src={ntuLogo} alt="NTU" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'Economics & Philosophy, Presidential Awards',
    details: [
      "Overall GPA: 4.00/4.30",
      "Awards: President Awards in 106, President Awards in 109"
    ]
  },
  {
    id: 'fcc',
    type: 'work',
    title: 'Assistant Analyst Intern',
    subtitle: 'FCC Partners Asia, Taiwan',
    date: '2019.3 - 2019.8',
    icon: <img src={fccLogo} alt="FCC Partners" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
    summary: 'Investment Teaser, Business Plan, Market Research',
    details: [
      "Assisted in drafting 3 investment teaser and 1 business plan covering development plans, fundraising strategies, market prospects, and investment highlights.",
      "Prepared 20+ data collection reports for potential clients, focusing on business models, competitive advantages, financial performance, and fundraising records."
    ]
  }
];

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none'
};

function Timeline() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const handleOpen = (item: TimelineItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sortedTimelineData = [...timelineData].sort((a, b) => {
    const getStartDate = (dateStr: string) => {
      const start = dateStr.split('-')[0].trim();
      const [year, month] = start.split('.').map(Number);
      return new Date(year, month - 1).getTime();
    };
    return getStartDate(b.date) - getStartDate(a.date);
  });

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {sortedTimelineData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className={`vertical-timeline-element--${item.type} clickable-element`}
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)', cursor: 'pointer' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={item.date}
              iconStyle={{ background: item.type === 'education' ? 'rgb(233, 30, 99)' : 'white', color: item.type === 'education' ? 'white' : 'rgb(39, 40, 34)' }}
              icon={item.icon}
              onTimelineElementClick={() => handleOpen(item)}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.summary}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            {selectedItem && (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1, color: 'black' }}>
                  {selectedItem.title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', color: 'black' }}>
                  {selectedItem.subtitle} <br/>
                  <span style={{ fontSize: '0.9rem', color: 'gray' }}>{selectedItem.date}</span>
                </Typography>
                <List sx={{ color: 'black' }}>
                  {selectedItem.details.map((detail, index) => (
                    <ListItem key={index} alignItems="flex-start" sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: 1 }}>
                        <CircleIcon sx={{ fontSize: 8 }} />
                      </ListItemIcon>
                      <ListItemText primary={detail} sx={{ color: 'black' }} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
        </Modal>
      </div>
      <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc' }} />
    </div>
  );
}

export default Timeline;
