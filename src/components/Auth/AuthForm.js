import React, { useState } from "react";
import "./Login.css";
import { Form, PageHeader } from "antd";
import LoginButton from "./LoginButton";
import InputForm from "./inputForm";
import classNames from 'classnames/bind';

const AuthForm = () => {
  const [loginMode, setLoginMode] = useState(true);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  let loginform = 'ant-form ant-form-horizontal login-form ';

  return (
    
    <Form
      name="normal_login"
      className={!loginMode?'login-form register' : 'login-form'}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      { !loginMode ? (
      <PageHeader className="site-page-header" title="회원가입" />
      ) : (
      <PageHeader className="site-page-header" title="로그인" />
      )}

      <div className="login-wrap">
        <InputForm loginMode={loginMode} />
        <LoginButton loginMode={loginMode} />
        { !loginMode ? (
          <div className="txt-register">
            이미 계정이 있으신가요? <a href="void(0)" onClick={(e) => {e.preventDefault();setLoginMode(!loginMode)}}>로그인</a>
          </div>
        ) : (
          <div className="txt-register">
            계정이 필요하신가요? <a href="void(0)" onClick={(e) => {e.preventDefault();classNames(loginform, 'register');setLoginMode(!loginMode)}}>가입하기</a>
          </div>
        )}
      </div>
    </Form>
  );
};

export default AuthForm;
