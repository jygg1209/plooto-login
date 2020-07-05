import React from "react";
import "./Login.css";
import { Form, Button } from "antd";

const LoginButton = (props) => {
  if (props.loginMode) {
    return (
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          로그인
        </Button>
      </Form.Item>
    );
  } else {
    return (
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          가입하기
        </Button>
      </Form.Item>
    );
  }
};

export default LoginButton;
