import React, { useState } from "react";
import parking1 from '../assets/images/parking1.png';
import totalResult from '../assets/images/streamlit_dashboard.png';
import '../assets/styles/Project.scss';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

interface ProjectItem {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  link: string;
  github: string;
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

function Project() {
    const { mode } = useTheme();
    const { language } = useLanguage();
    const t = translations[language].projects;
    const isDark = mode === 'dark';

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);

    const handleOpen = (item: ProjectItem) => {
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

    const projectData: ProjectItem[] = [
      {
        id: 'parkfinder',
        title: t.parkfinder.title,
        image: parking1,
        shortDescription: t.parkfinder.short,
        fullDescription: t.parkfinder.full,
        link: t.parkfinder.link,
        github: t.parkfinder.github
      },
      {
        id: 'betting',
        title: t.betting.title,
        image: totalResult,
        shortDescription: t.betting.short,
        fullDescription: t.betting.full,
        link: t.betting.link,
        github: t.betting.github
      }
    ];

    return(
    <div className="projects-container" id="projects">
        <h1>{t.title}</h1>
        <div className="projects-grid">
            {projectData.map((item) => (
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
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
                            <Button
                                variant="outlined"
                                startIcon={<GitHubIcon />}
                                href={selectedItem.github}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    color: isDark ? '#fff' : '#333',
                                    borderColor: isDark ? '#fff' : '#333',
                                    '&:hover': {
                                        borderColor: isDark ? '#ccc' : '#000',
                                        bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                                    }
                                }}
                            >
                                {t.visit_github}
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={
                                    <img 
                                        src="https://streamlit.io/images/brand/streamlit-mark-color.png" 
                                        alt="Streamlit" 
                                        style={{ width: '20px', height: '20px' }} 
                                    />
                                }
                                href={selectedItem.link}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    color: isDark ? '#fff' : '#333',
                                    borderColor: isDark ? '#fff' : '#333',
                                    '&:hover': {
                                        borderColor: isDark ? '#ccc' : '#000',
                                        bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                                    }
                                }}
                            >
                                {t.visit_app}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
        <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc' }} />
    </div>
    );
}

export default Project;