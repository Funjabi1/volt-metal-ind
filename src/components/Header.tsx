import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import './Header.css';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo">Volt Metal Industries</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} className="menu">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item key="company" icon={<InfoCircleOutlined />}>
          <a href="#company">Company</a>
        </Menu.Item>
        <Menu.Item key="products" icon={<AppstoreOutlined />}>
          <a href="#products">Products</a>
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          <a href="#contact">Contact</a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
