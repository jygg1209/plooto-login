import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header1";
import Content from "./components/Content1";

const App = (props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />,
      <Content />,
    </Layout>
  );
};

export default App;
