import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, Reorder } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

const ProjectsSection = styled(motion.section)`
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
    background: linear-gradient(90deg, #007bff, #00b894);
  }
`;

const ProjectsGrid = styled(Reorder.Group<Project>)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
`;

const ProjectCard = styled(Reorder.Item<Project>)`
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

const ProjectImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
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

  &::before {
    content: '';
    width: 20px;
    height: 3px;
    background: linear-gradient(90deg, #007bff, #00b894);
    border-radius: 2px;
  }
`;

const ProjectDescription = styled.p`
  color: #636e72;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled(motion.span)`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #2d3436;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Modern E-commerce Platform',
      description: 'A cutting-edge e-commerce solution with advanced UI/UX features, real-time inventory management, and seamless payment integration.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: '2',
      title: 'Interactive Task Manager',
      description: 'A sleek task management application with drag-and-drop functionality, real-time updates, and intuitive user interface.',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A modern weather application with beautiful visualizations, location-based forecasts, and real-time weather updates.',
      tags: ['React', 'TypeScript', 'API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      codeUrl: '#'
    }
  ]);

  const handleReorder = (newOrder: Project[]) => {
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
              whileDrag={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
            >
              <ProjectImage imageUrl={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </ProjectLink>
                  <ProjectLink
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 