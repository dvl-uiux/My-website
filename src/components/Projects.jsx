import { useState } from 'react';
import styled from 'styled-components';
import { motion, Reorder } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsTitle = styled.h2`
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

const ProjectsGrid = styled(Reorder.Group)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
`;

const ProjectCard = styled(Reorder.Item)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: grab;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  &:active {
    cursor: grabbing;
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  background: white;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #636e72;
  margin-bottom: 1.5rem;
`;

const ProjectFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: #636e72;
    font-size: 0.95rem;

    &::before {
      content: '•';
      color: #1a2a6c;
      font-weight: bold;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: #f1f2f6;
  color: #2d3436;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2a6c;
    color: white;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: '1',
      title: 'Medimom Pregnancy App',
      description: 'A comprehensive pregnancy tracking and healthcare management application designed to support expectant mothers throughout their pregnancy journey.',
      features: [
        'Interactive pregnancy calendar with weekly updates',
        'Personalized health tracking and reminders',
        'Secure messaging with healthcare providers',
        'Nutrition and exercise recommendations',
        'Community support features'
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'UI/UX Design'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: '2',
      title: 'Language Translation App',
      description: 'An AI-powered language translation application with real-time voice and text translation capabilities.',
      features: [
        'Real-time voice and text translation',
        'Offline mode with downloaded language packs',
        'Conversation mode for two-way translation',
        'Text-to-speech functionality',
        'History and favorite translations'
      ],
      tags: ['React Native', 'TypeScript', 'Redux', 'Google Cloud API', 'UI/UX Design', 'Figma'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: '3',
      title: 'Company Website Redesign',
      description: 'A modern and responsive company website with enhanced user experience and performance optimization.',
      features: [
        'Responsive design with mobile-first approach',
        'Performance optimization with lazy loading',
        'Interactive animations and transitions',
        'SEO optimization and analytics integration',
        'Content management system integration'
      ],
      tags: ['React', 'Next.js', 'Styled Components', 'Framer Motion', 'UI/UX Design', 'Figma', 'SEO'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80'
    }
  ]);

  const handleReorder = (newOrder) => {
    setProjects(newOrder);
  };

  return (
    <ProjectsSection
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ProjectsContainer>
        <ProjectsTitle>Featured Projects</ProjectsTitle>
        <ProjectsGrid
          values={projects}
          onReorder={handleReorder}
          axis="y"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              value={project}
              whileDrag={{ scale: 1.05 }}
            >
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectFeatures>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ProjectFeatures>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 