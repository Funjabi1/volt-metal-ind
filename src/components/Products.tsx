import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import './Products.css';

const { Title } = Typography;
const { Meta } = Card;

const Products: React.FC = () => {
  const productData = [
    {
      title: 'Brass Strip Connectors',
      image: '@/assets/product1.jpg', // Replace with actual image paths
      bgColor: '#FFD700',
    },
    {
      title: 'HRC Fuse Link',
      image: '@/assets/product2.jpg',
    },
    {
      title: 'Sheet Cutting Components',
      image: '@/assets/product3.jpg',
    },
  ];

  return (
    <section id="products" className="products-section">
      <Title level={2}>Our Products</Title>
      <Row gutter={[16, 16]} justify="center">
        {productData.map((product, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} />}
              style={{ backgroundColor: product.bgColor || '#fff' }}
            >
              <Meta title={product.title} />
            </Card>
          </Col>
        ))}
      </Row>
      <Button type="primary" size="large" className="view-more">
        View More Products
      </Button>
    </section>
  );
};

export default Products;
