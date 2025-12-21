
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
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

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
  const { mode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].career;
  const isDark = mode === 'dark';

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const handleOpen = (item: TimelineItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dynamicModalStyle = {
    ...modalStyle,
    bgcolor: isDark ? '#333' : 'background.paper',
    color: isDark ? '#f0f0f0' : 'black',
  };

  const timelineData: TimelineItem[] = [
    {
      id: 'yulon',
      type: 'work',
      title: t.yulon.title,
      subtitle: t.yulon.subtitle,
      date: t.yulon.date,
      icon: <img src={yulonLogo} alt="Yulon" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.yulon.summary,
      details: t.yulon.details
    },
    {
      id: 'ntu-master',
      type: 'education',
      title: t.ntu_master.title,
      subtitle: t.ntu_master.subtitle,
      date: '2021.9 - 2023.6',
      icon: <img src={ntuLogo} alt="NTU" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.ntu_master.summary,
      details: t.ntu_master.details
    },
    {
      id: 'shopee-xpress',
      type: 'work',
      title: t.shopee_xpress.title,
      subtitle: t.shopee_xpress.subtitle,
      date: '2022.9 - 2023.3',
      icon: <img src={spxLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.shopee_xpress.summary,
      details: t.shopee_xpress.details
    },
    {
      id: 'shopee-cross-border',
      type: 'work',
      title: t.shopee_cb.title,
      subtitle: t.shopee_cb.subtitle,
      date: '2022.3 - 2022.8',
      icon: <img src={shopeeLogo} alt="Shopee" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.shopee_cb.summary,
      details: t.shopee_cb.details
    },
    {
      id: 'ntu-bachelor',
      type: 'education',
      title: t.ntu_bachelor.title,
      subtitle: t.ntu_bachelor.subtitle,
      date: '2016.9 - 2021.6',
      icon: <img src={ntuLogo} alt="NTU" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.ntu_bachelor.summary,
      details: t.ntu_bachelor.details
    },
    {
      id: 'fcc',
      type: 'work',
      title: t.fcc.title,
      subtitle: t.fcc.subtitle,
      date: '2019.3 - 2019.8',
      icon: <img src={fccLogo} alt="FCC Partners" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} />,
      summary: t.fcc.summary,
      details: t.fcc.details
    }
  ];

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
        <h1>{t.title}</h1>
        <VerticalTimeline>
          {sortedTimelineData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className={`vertical-timeline-element--${item.type} clickable-element`}
              contentStyle={{ 
                background: isDark ? '#333' : 'white', 
                color: isDark ? '#f0f0f0' : 'rgb(39, 40, 34)', 
                cursor: 'pointer' 
              }}
              contentArrowStyle={{ borderRight: `7px solid ${isDark ? '#333' : 'white'}` }}
              date={item.date}
              iconStyle={{ 
                background: item.type === 'education' ? 'rgb(233, 30, 99)' : (isDark ? '#333' : 'white'), 
                color: item.type === 'education' ? 'white' : (isDark ? '#f0f0f0' : 'rgb(39, 40, 34)') 
              }}
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
          <Box sx={dynamicModalStyle}>
            {selectedItem && (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1, color: isDark ? '#fff' : 'black' }}>
                  {selectedItem.title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', color: isDark ? '#ccc' : 'black' }}>
                  {selectedItem.subtitle} <br/>
                  <span style={{ fontSize: '0.9rem', color: isDark ? '#aaa' : 'gray' }}>{selectedItem.date}</span>
                </Typography>
                <List sx={{ color: isDark ? '#f0f0f0' : 'black' }}>
                  {selectedItem.details.map((detail, index) => (
                    <ListItem key={index} alignItems="flex-start" sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: 1 }}>
                        <CircleIcon sx={{ fontSize: 8, color: isDark ? '#f0f0f0' : 'inherit' }} />
                      </ListItemIcon>
                      <ListItemText primary={detail} sx={{ color: isDark ? '#f0f0f0' : 'black' }} />
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
