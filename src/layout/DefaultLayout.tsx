import React from 'react'
import {
  AppstoreOutlined,
  PayCircleOutlined,
  PieChartOutlined,
  TeamOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'
import {Layout, Menu, theme} from 'antd'
import App from "../App";
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout


const DefaultLayout = () => {
  const {
    token: {colorBgContainer}
  } = theme.useToken()


  return (
    <Layout hasSider style={{minHeight: '100vh'}}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <div className="demo-logo-vertical"/>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/" style={{textDecoration: 'none'}}>
              <AppstoreOutlined type="fire"/>
              <span>Клиенты</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/test-page" style={{textDecoration: 'none'}}>
              <PieChartOutlined type="fire"/>
              <span>Модули тестов</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/employee" style={{textDecoration: 'none'}}>
              <TeamOutlined type="fire"/>
              <span>Сотрудники</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/payment" style={{textDecoration: 'none'}}>
              <PayCircleOutlined type="fire"/>
              <span>Оплата</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/data" style={{textDecoration: 'none'}}>
              <AppstoreOutlined type="fire"/>
              <span>Данные</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/all-test" style={{textDecoration: 'none'}}>
              <UnorderedListOutlined type="fire"/>
              <span>Все тесты</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{marginLeft: 200}}>
        <Content style={{overflow: 'initial', height: '100%'}}>
          <App/>
        </Content>
        <Footer style={{textAlign: 'center'}}>Neurotest ©2023</Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
