import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%);
  color: #ffffff;
`;

const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
`;

const NameTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 300;
  max-width: 800px;
  line-height: 1.6;
  margin: 0 auto 3rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ScrollExplore = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -5px);
  }
`;

const ScrollText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, 20px); opacity: 0; }
  }
`;

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <Navigation />
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NameTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kelvin Sanni-Davies
        </NameTitle>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Frontend Developer & UI/UX Designer
        </Subtitle>
        <ScrollExplore
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ScrollText>Scroll to explore</ScrollText>
          <ScrollIcon
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </ScrollExplore>
      </HeroSection>
      <div ref={aboutRef}>
        <About />
      </div>
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App; 