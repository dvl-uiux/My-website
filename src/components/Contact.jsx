import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem 0;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
              url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  border-radius: 20px;
  margin: 2rem 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
    background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
  }
`;

const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: #f1f2f6;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #1a2a6c;
  }
`;

const InfoText = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #2d3436;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1rem;
    color: #636e72;
    margin: 0;
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a2a6c;
    box-shadow: 0 0 0 2px rgba(26, 42, 108, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a2a6c;
    box-shadow: 0 0 0 2px rgba(26, 42, 108, 0.1);
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fdbb2d, #b21f1f, #1a2a6c);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    &::before {
      opacity: 1;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
        <ContactInfo>
          <InfoItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <InfoText>
              <h3>Phone</h3>
              <p>+234 903 912 2204</p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <InfoText>
              <h3>Email</h3>
              <p>sannikelvindavid@gmail.com</p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <InfoText>
              <h3>Location</h3>
              <p>Lekki Phase 1, Lagos, Nigeria</p>
            </InfoText>
          </InfoItem>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Get in Touch</ContactTitle>
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
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 