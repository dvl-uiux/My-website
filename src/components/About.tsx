import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3436;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #007bff, #00b894);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #2d3436;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #636e72;
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #2d3436;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #636e72;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '•';
      color: #007bff;
      font-weight: bold;
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          <AboutText>
            <h3>Frontend Developer & Creative UI/UX Designer</h3>
            <p>
              I am a passionate Frontend Developer and Creative UI/UX Designer with a strong foundation in engineering design principles. 
              My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
            </p>
            <p>
              With a keen eye for detail and a deep understanding of both design and development, I create intuitive, 
              responsive, and visually appealing web applications that not only look great but also function flawlessly.
            </p>
          </AboutText>
          <SkillsGrid>
            <SkillCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4>Frontend Development</h4>
              <ul>
                <li>React & TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
                <li>State Management</li>
              </ul>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4>UI/UX Design</h4>
              <ul>
                <li>User Interface Design</li>
                <li>User Experience</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4>Engineering Design</h4>
              <ul>
                <li>Technical Documentation</li>
                <li>System Architecture</li>
                <li>Performance Optimization</li>
                <li>Code Quality</li>
                <li>Technical Problem Solving</li>
              </ul>
            </SkillCard>
          </SkillsGrid>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 