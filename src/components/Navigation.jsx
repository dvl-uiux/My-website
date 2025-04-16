import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.button)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    color: #ffffff;
  }

  &:hover::before {
    opacity: 0.2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 42, 108, 0.95);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  backdrop-filter: blur(10px);
`;

const MobileNavLink = styled(motion.button)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  padding: 1rem;
  text-align: left;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateX(10px);
    color: #ffffff;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Nav
      style={{
        background: scrolled ? 'rgba(26, 42, 108, 0.95)' : 'rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Logo 
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Kelvin Sanni
      </Logo>
      <NavLinks>
        <NavLink 
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>
      <MobileMenuButton 
        onClick={() => setIsMobileMenuOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </MobileMenuButton>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton 
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </CloseButton>
            <MobileNavLink
              onClick={() => scrollToSection('about')}
              whileHover={{ x: 10 }}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              onClick={() => scrollToSection('projects')}
              whileHover={{ x: 10 }}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              onClick={() => scrollToSection('contact')}
              whileHover={{ x: 10 }}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navigation; 