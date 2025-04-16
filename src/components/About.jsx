import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 0;
  background: #0a192f;
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #64ffda;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #64ffda;
    border-radius: 2px;
  }
`;

const AboutText = styled(motion.div)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #64ffda;
  }
`;

const SkillsContainer = styled(motion.div)`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: #ccd6f6;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: #112240;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #233554;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
    box-shadow: 0 4px 20px rgba(100, 255, 218, 0.1);
  }

  i {
    font-size: 1.5rem;
    color: #64ffda;
    margin-bottom: 0.5rem;
  }
`;

const SkillName = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
  display: block;
`;

const skillsData = {
  frontend: [
    { name: "React", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "Sass", icon: "fab fa-sass" },
    { name: "TypeScript", icon: "fas fa-code" },
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "npm", icon: "fab fa-npm" },
    { name: "Terminal", icon: "fas fa-terminal" },
    { name: "GitHub", icon: "fab fa-github" },
  ],
  design: [
    { name: "UI Design", icon: "fas fa-pencil-ruler" },
    { name: "UX Design", icon: "fas fa-user" },
    { name: "Wireframing", icon: "fas fa-sitemap" },
    { name: "Prototyping", icon: "fas fa-project-diagram" },
    { name: "Responsive", icon: "fas fa-mobile-alt" },
    { name: "Accessibility", icon: "fas fa-universal-access" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

function About() {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </SectionTitle>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm <strong>Kelvin</strong>, a passionate frontend developer and UI/UX designer with a keen eye for creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              My approach combines clean code with intuitive design, ensuring that every project not only looks great but also delivers exceptional user experience. I believe in <strong>"mind in motion, ideas in action"</strong> – turning creative concepts into practical solutions.
            </p>
          </AboutText>

          <SkillsContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillsTitle>Frontend Development</SkillsTitle>
            <SkillsGrid>
              {skillsData.frontend.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <i className={skill.icon}></i>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>

            <SkillsTitle>Design</SkillsTitle>
            <SkillsGrid>
              {skillsData.design.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <i className={skill.icon}></i>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>

            <SkillsTitle>Tools & Technologies</SkillsTitle>
            <SkillsGrid>
              {skillsData.tools.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <i className={skill.icon}></i>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}

export default About; 