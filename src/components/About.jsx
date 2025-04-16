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
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #2d3436;
    margin-bottom: 1.5rem;
  }
`;

const Motto = styled(motion.p)`
  font-size: 1.2rem;
  font-style: italic;
  color: #1a2a6c;
  text-align: right;
  margin-top: 2rem;
  font-weight: 600;
  position: relative;
  padding-right: 1rem;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
    transform: translateY(-50%);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
  }

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #2d3436;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      color: #636e72;

      &::before {
        content: '•';
        color: #1a2a6c;
        font-weight: bold;
      }
    }
  }
`;

const About = () => {
  const skills = {
    frontend: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
      'HTML5 & CSS3', 'Tailwind CSS', 'Styled Components', 'Framer Motion',
      'Redux & Context API', 'RESTful APIs', 'GraphQL', 'Webpack & Vite'
    ],
    uiux: [
      'Figma', 'Adobe XD', 'User Research', 'Wireframing',
      'Prototyping', 'Responsive Design', 'Accessibility (WCAG)',
      'UI/UX Principles', 'Design Systems', 'User Testing',
      'Motion Design', 'Micro-interactions'
    ],
    tools: [
      'Git & GitHub', 'VS Code', 'Chrome DevTools', 'Jest & React Testing Library',
      'Postman', 'npm & yarn', 'Docker', 'CI/CD', 'Agile/Scrum',
      'Jira & Trello', 'Figma Plugins', 'Adobe Creative Suite'
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
          <AboutText>
            <p>
              Hi, I'm Kelvin Adegbemisola Sanni, a passionate Frontend Developer and UI/UX Designer 
              with a keen eye for creating elegant, efficient, and user-friendly web applications. 
              I specialize in building modern web solutions that combine beautiful design with 
              robust functionality.
            </p>
            <p>
              With expertise in React, Next.js, and modern JavaScript, I craft responsive and 
              performant web applications. My UI/UX design background allows me to create 
              intuitive user interfaces that not only look great but also provide exceptional 
              user experiences.
            </p>
            <p>
              I'm constantly exploring new technologies and best practices to stay at the 
              forefront of web development. My goal is to create digital experiences that 
              are both visually stunning and functionally impeccable.
            </p>
            <Motto
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              "Mind in motion, ideas in action"
            </Motto>
          </AboutText>
          <SkillsGrid>
            <SkillCard>
              <h3>Frontend Development</h3>
              <ul>
                {skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </SkillCard>
            <SkillCard>
              <h3>UI/UX Design</h3>
              <ul>
                {skills.uiux.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </SkillCard>
            <SkillCard>
              <h3>Tools & Technologies</h3>
              <ul>
                {skills.tools.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </SkillCard>
          </SkillsGrid>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 