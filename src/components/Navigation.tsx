import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../assets/data/translations";

const drawerWidth = 240;

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navigation;

  const navItems = [
    [t.expertise, 'expertise'], 
    [t.history, 'history'], 
    [t.projects, 'projects'], 
    [t.analysis, 'business-analysis'], 
    [t.research, 'research'], 
    [t.teaching, 'teaching']
  ];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeSection, setActiveSection] = useState<string>('');

  const observerRefs = React.useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        observerRefs.current[entry.target.id] = entry;
      });

      const visibleSections = Object.values(observerRefs.current).filter(
        (entry) => entry.isIntersecting
      );

      if (visibleSections.length > 0) {
        // Sort by intersection ratio (most visible wins)
        // Or better: sort by which one is closest to the top of the viewport if we are looking at the top
        // Let's us intersectionRatio for now as it's robust for "what is mainly on screen"
        visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visibleSections[0].target.id);
      }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], rootMargin: '-10% 0px -45% 0px' });

    navItems.forEach((item) => {
      const element = document.getElementById(item[1]);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center', backgroundColor: activeSection === item[1] ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }} 
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={() => modeChange()}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton color="inherit" onClick={toggleLanguage} sx={{ ml: 0 }}>
              <LanguageIcon />
              <Box component="span" sx={{ fontSize: '0.8rem', ml: 0.5, fontWeight: 'bold' }}>
                {language === 'en' ? 'EN' : '中'}
              </Box>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}>
            {navItems.map((item) => (
              <Button 
                key={item[0]} 
                onClick={() => scrollToSection(item[1])} 
                sx={{ 
                  color: activeSection === item[1] ? '#5000ca' : (mode === 'light' && !scrolled ? '#000' : '#fff'),
                  fontWeight: activeSection === item[1] ? 'bold' : 'normal',
                  borderBottom: activeSection === item[1] ? '2px solid #5000ca' : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': {
                    color: '#5000ca'
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;