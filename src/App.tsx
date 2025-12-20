import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  BusinessAnalysis,
  Research,
  Teaching,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const location = useLocation();

    useEffect(() => {
        const state = location.state as { target?: string };
        if (state && state.target) {
            const element = document.getElementById(state.target);
            if (element) {
                // Using a small timeout to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [location]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <BusinessAnalysis/>
            <Research/>
            <Teaching/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;