import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = styled(motion.section)`
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactTitle = styled.h2`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #007bff, #00b894);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #007bff;
  }
`;

const InfoText = styled.p`
  color: #636e72;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  color: #2d3436;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    color: #007bff;
  }
`;

const StatusMessage = styled.div<{ success: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  background-color: ${props => props.success ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
  color: ${props => props.success ? '#28a745' : '#dc3545'};
  border: 1px solid ${props => props.success ? '#28a745' : '#dc3545'};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ success: true, message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ContactContainer>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            {status && (
              <StatusMessage success={status.success}>
                {status.message}
              </StatusMessage>
            )}
          </ContactForm>
          <ContactInfo>
            <InfoCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <InfoTitle>
                <i className="fas fa-envelope"></i>
                Email
              </InfoTitle>
              <InfoText>Feel free to reach out for collaborations, job opportunities, or just to say hello!</InfoText>
              <a href="mailto:sannikevindavid@gmail.com" style={{ color: '#007bff', marginTop: '1rem', display: 'inline-block' }}>
                sannikevindavid@gmail.com
              </a>
            </InfoCard>
            <InfoCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <InfoTitle>
                <i className="fas fa-map-marker-alt"></i>
                Location
              </InfoTitle>
              <InfoText>Based in Nigeria, open to remote opportunities worldwide.</InfoText>
            </InfoCard>
            <InfoCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <InfoTitle>
                <i className="fas fa-link"></i>
                Connect
              </InfoTitle>
              <InfoText>Let's connect and build something amazing together!</InfoText>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/dvl-uiux"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/kelvin-sanni-90763a12b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink
                  href="https://x.com/Dianactivity"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink
                  href="https://dribbble.com/KelvinSanni911"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-dribbble"></i>
                </SocialLink>
              </SocialLinks>
            </InfoCard>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 