import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  min-height: 100vh;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid #1a2a6c;
    border-radius: 20px;
    z-index: -1;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-5px, -5px);
  }
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
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #636e72;
  margin-bottom: 2rem;
`;

const Motto = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: #2d3436;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  border-left: 4px solid #1a2a6c;
  background: linear-gradient(90deg, rgba(26, 42, 108, 0.1), transparent);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const About = () => {
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
          <ProfileImageContainer>
            <ProfileImage
              src="/profile.jpg"
              alt="Kelvin Sanni-Davies"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </ProfileImageContainer>
          <div>
            <AboutText>
              <p>
                Hi, I'm Kelvin Sanni-Davies, a passionate Frontend Developer and UI/UX Designer based in Lagos, Nigeria. 
                I specialize in creating beautiful, functional, and user-centered digital experiences.
              </p>
              <Motto>"Mind in motion, ideas in action"</Motto>
            </AboutText>
            <SkillsGrid>
              {[
                'React', 'Next.js', 'TypeScript',
                'Tailwind CSS', 'Styled Components',
                'Framer Motion', 'UI/UX Design',
                'Figma', 'Responsive Design'
              ].map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 