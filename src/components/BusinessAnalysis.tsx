import React, { useState } from "react";
import peopleFlowMap from '../assets/images/people_flow_map.png';
import isTripRate from '../assets/images/is_trip_rate.png';
import mgm from '../assets/images/mgm.png';
import '../assets/styles/BusinessAnalysis.scss';
import { Modal, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

interface AnalysisItem {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const analysisData: AnalysisItem[] = [
  {
    id: 'people-flow-map',
    title: 'Tableau Shared Station Flow Map',
    image: peopleFlowMap,
    shortDescription: 'Optimizing station placement and elimination using shared station flow visualization.',
    fullDescription: 'We utilized Tableau to create a comprehensive visualization of shared station usage flows. This map empowers the business unit to intuitively understand the "people flow" across different locations. By analyzing this data, the team can make data-driven decisions on where to strategically open new stations to capture high demand and identify underperforming stations with low foot traffic for potential elimination, thereby optimizing the overall network efficiency.'
  },
  {
    id: 'is-trip-rate',
    title: 'Driver Trip Rate Estimation',
    image: isTripRate,
    shortDescription: 'Estimating driver acceptance rates using total fare and performance metrics with LOWESS fitting.',
    fullDescription: 'This project focuses on estimating the probability of a driver accepting a trip request (Trip Rate). We analyze historical data correlating the total fare amount and individual driver performance metrics. By applying LOWESS (Locally Weighted Scatterplot Smoothing) to fit the data points, we generated a trip rate curve. This model allows us to simulate different pricing scenarios and determine the optimal subsidy amount required to achieve a target acceptance rate at the lowest possible cost.'
  },
  {
    id: 'mgm-analysis',
    title: 'MGM Social Network Analysis',
    image: mgm,
    shortDescription: 'Analyzing "Member Get Member" campaign performance using social network analysis.',
    fullDescription: 'Leveraging the NetworkX library, we conducted a social network analysis on the "Member Get Member" (MGM) campaign. By mapping out the connections formed through referrals, we classified users into different community clusters. We then calculated various network centrality metrics to identify key influencers within the network. This analysis enables targeted marketing strategies, focusing resources on users with high centrality to maximize the viral effect and overall campaign performance.'
  }
];

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
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<AnalysisItem | null>(null);

    const handleOpen = (item: AnalysisItem) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
    <div className="business-analysis-container" id="business-analysis">
        <h1>Business Analysis</h1>
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
