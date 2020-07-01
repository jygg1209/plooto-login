import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header } = Layout;
const Header1 = () => {
    return (
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">PLOOTO</Menu.Item>
            <Menu.Item key="2">홈</Menu.Item>
            <Menu.Item key="3">PD</Menu.Item>
            <Menu.Item key="4" style={{ float: "right" }}>로그인</Menu.Item>
          </Menu>
        </Header>
    );
};

export default Header1;