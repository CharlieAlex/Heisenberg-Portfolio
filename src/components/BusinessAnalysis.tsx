import React, { useState } from "react";
import peopleFlowMap from '../assets/images/people_flow_map.png';
import isTripRate from '../assets/images/is_trip_rate.png';
import mgm from '../assets/images/mgm.png';
import '../assets/styles/BusinessAnalysis.scss';
import { Modal, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

interface AnalysisItem {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
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

function BusinessAnalysis() {
    const { language } = useLanguage();
    const t = translations[language].analysis;

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<AnalysisItem | null>(null);

    const handleOpen = (item: AnalysisItem) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const analysisData: AnalysisItem[] = [
      {
        id: 'people-flow-map',
        title: t.people_flow.title,
        image: peopleFlowMap,
        shortDescription: t.people_flow.short,
        fullDescription: t.people_flow.full
      },
      {
        id: 'is-trip-rate',
        title: t.trip_rate.title,
        image: isTripRate,
        shortDescription: t.trip_rate.short,
        fullDescription: t.trip_rate.full
      },
      {
        id: 'mgm-analysis',
        title: t.mgm.title,
        image: mgm,
        shortDescription: t.mgm.short,
        fullDescription: t.mgm.full
      }
    ];

    return(
    <div className="business-analysis-container" id="business-analysis">
        <h1>{t.title}</h1>
        <div className="analysis-grid">
            {analysisData.map((item) => (
                <div className="analysis-item" key={item.id} onClick={() => handleOpen(item)}>
                    <div className="analysis-img-wrapper">
                        <img src={item.image} className="zoom" alt={item.title}/>
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
            <Box sx={modalStyle}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {selectedItem && (
                    <>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                            {selectedItem.title}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                             <img 
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '4px' }}
                            />
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: '#555', lineHeight: 1.6 }}>
                            {selectedItem.fullDescription}
                        </Typography>
                    </>
                )}
            </Box>
        </Modal>
        <hr style={{ width: '80%', margin: '0 auto', border: '0', borderTop: '2px dashed #ccc', marginTop: '3rem' }} />
    </div>
    );
}

export default BusinessAnalysis;
