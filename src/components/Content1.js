import React from 'react';
import { Layout } from "antd";
import AuthForm from "./Auth/AuthForm";

const { Content } = Layout;
const Content1 = () => {
    return (
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <AuthForm className="login"/>
            </Content>
          </Layout>
        </Layout>
    );
};

export default Content1;