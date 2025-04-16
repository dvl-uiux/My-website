import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%);
  color: #ffffff;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 0 10%;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 5%;
    align-items: center;
    text-align: center;
  }
`;

const NameTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #64ffda;
  background: linear-gradient(to right, #64ffda, #48bfe3);
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
  margin: 0 0 2rem 0;
  color: #8892b0;
`;

const TagLine = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 400;
  color: #64ffda;
  margin-bottom: 2rem;
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
  font-size: 0.9rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #64ffda;
`;

const ScrollIcon = styled(motion.div)`
  width: 26px;
  height: 42px;
  border: 2px solid #64ffda;
  border-radius: 13px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #64ffda;
    border-radius: 50%;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, 15px); opacity: 0; }
  }
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppContainer>
      <Navigation />
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="hero"
      >
        <TagLine
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, my name is
        </TagLine>
        <NameTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Kelvin Sanni-Davies
        </NameTitle>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I craft exceptional digital experiences through code and design.
        </Subtitle>
        <CTAButton
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </CTAButton>
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
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App; 