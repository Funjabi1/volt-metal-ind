import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import aboutImage from '@/assets/about-image.jpg'; // Place your image in src/assets
import './About.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <Row align="middle" gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Title level={2}>
            About <span className="highlight">VOLT</span>
          </Title>
          <Paragraph>
            Volt Metal Industries was established in 1987 as a manufacturer of Brass Engineering Precision Turned Components & Electrical Assemblies. With over <strong>35 years of experience</strong>, we are committed to continuously upgrading technology, adhering to international standards, and offering competitive rates. Our product sectors include Electrical & Electronics, Automobiles, Plastic Molding Industry, Construction & Industrial Applications.
          </Paragraph>
          <Button type="primary" size="large">
            Read More
          </Button>
        </Col>
        <Col xs={24} md={12}>
          <img src={aboutImage} alt="Industrial Machinery" className="about-image" />
        </Col>
      </Row>
    </section>
  );
};

export default About;
