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

  p {
    margin-bottom: 1.5rem;
  }
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

const TechSection = styled.div`
  margin-top: 2rem;
`;

const TechCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3436;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(to bottom, #1a2a6c, #b21f1f);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
  }
`;

const About = () => {
  const technologies = {
    frontend: [
      'React', 'Next.js', 'TypeScript',
      'JavaScript', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Styled Components'
    ],
    design: [
      'Figma', 'Adobe XD', 'UI Design',
      'UX Design', 'Wireframing', 'Prototyping'
    ],
    tools: [
      'Git', 'VS Code', 'Framer Motion',
      'Redux', 'REST APIs', 'GraphQL'
    ]
  };

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
                With a keen eye for detail and a love for creating seamless user experiences, I transform complex problems 
                into elegant, user-friendly solutions.
              </p>
              <p>
                My expertise lies in building modern web applications using cutting-edge technologies. I specialize in 
                React and Next.js development, creating responsive and performant applications that deliver exceptional 
                user experiences. My background in UI/UX design allows me to bridge the gap between design and 
                development, ensuring that every project is both visually stunning and functionally robust.
              </p>
              <Motto>"Mind in motion, ideas in action"</Motto>
            </AboutText>
            <TechSection>
              {Object.entries(technologies).map(([category, skills], categoryIndex) => (
                <TechCategory key={category}>
                  <CategoryTitle>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </CategoryTitle>
                  <SkillsGrid>
                    {skills.map((skill, index) => (
                      <SkillCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 8 + index) * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </SkillCard>
                    ))}
                  </SkillsGrid>
                </TechCategory>
              ))}
            </TechSection>
          </div>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 