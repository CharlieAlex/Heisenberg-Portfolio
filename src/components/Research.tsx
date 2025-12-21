import React, { useState } from "react";
import thesis from '../assets/images/100day_1.png';
import trendTCE from '../assets/images/Trend_TCE.png';
import laborDivision from '../assets/images/labor_division.png';
import '../assets/styles/Project.scss';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

interface ResearchItem {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  link: string;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
  maxHeight: '90vh',
  overflowY: 'auto' as 'auto'
};

function Research() {
    const { mode } = useTheme();
    const { language } = useLanguage();
    const t = translations[language].research;
    const isDark = mode === 'dark';

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ResearchItem | null>(null);

    const handleOpen = (item: ResearchItem) => {
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

    const researchData: ResearchItem[] = [
      {
        id: 'thesis',
        title: t.thesis.title,
        image: thesis,
        shortDescription: t.thesis.short,
        fullDescription: t.thesis.full,
        link: process.env.PUBLIC_URL + t.thesis.link
      },
      {
        id: 'pension',
        title: t.pension.title,
        image: trendTCE,
        shortDescription: t.pension.short,
        fullDescription: t.pension.full,
        link: process.env.PUBLIC_URL + t.pension.link
      },
      {
        id: 'labor',
        title: t.labor.title,
        image: laborDivision,
        shortDescription: t.labor.short,
        fullDescription: t.labor.full,
        link: process.env.PUBLIC_URL + t.labor.link
      }
    ];

    return(
    <div className="projects-container" id="research">
        <h1>{t.title}</h1>
        <div className="projects-grid">
            {researchData.map((item) => (
                <div className="project" key={item.id} onClick={() => handleOpen(item)} style={{ cursor: 'pointer' }}>
                    <div className="project-img-wrapper">
                        <img src={item.image} className="zoom" alt={item.title} width="100%"/>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.shortDescription}</p>
                </div>
            ))}
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={dynamicModalStyle}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: isDark ? '#aaa' : (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {selectedItem && (
                    <>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: isDark ? '#fff' : '#333' }}>
                            {selectedItem.title}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                             <img 
                                width="100%"
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '4px' }}
                            />
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: isDark ? '#ccc' : '#555', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                            {selectedItem.fullDescription}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button
                                variant="contained"
                                endIcon={<ArticleIcon />}
                                href={selectedItem.link}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    bgcolor: isDark ? '#bb86fc' : '#5000ca',
                                    '&:hover': {
                                        bgcolor: isDark ? '#9a67ea' : '#3d00a0',
                                    }
                                }}
                            >
                                {language === 'en' ? 'View Paper' : '查看論文'}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    </div>
    );
}

export default Research;
