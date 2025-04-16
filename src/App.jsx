import { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow: hidden;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    will-change: transform;
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  will-change: transform;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  will-change: transform;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  color: #636e72;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
  will-change: transform;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  will-change: transform;

  span {
    font-size: 0.9rem;
    color: #636e72;
    font-weight: 500;
  }
`;

const App = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Background />
      <Navigation />
      <AppContainer>
        <Section id="home">
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kelvin Sanni
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer & UI/UX Designer
          </Subtitle>
          <ScrollIndicator
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ y: 5 }}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </ScrollIndicator>
        </Section>

        <About />
        <Projects />
        <Contact />
      </AppContainer>
    </>
  );
};

export default App; 