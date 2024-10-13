import React from 'react';
import { Typography, Button, Space } from 'antd';
import './Quality.css';

const { Title, Paragraph } = Typography;

const Quality: React.FC = () => {
  return (
    <section className="quality-section">
      <Title level={2}>QUALITY YOU CAN COUNT ON!</Title>
      <Paragraph>
        Volt combines cutting-edge infrastructure with rigorous quality control to offer products that meet international standards with timely delivery.
      </Paragraph>
      <Space size="large">
        <Button type="primary" size="large">
          View Quality Policy
        </Button>
        <Button size="large">View Infrastructure</Button>
      </Space>
    </section>
  );
};

export default Quality;
