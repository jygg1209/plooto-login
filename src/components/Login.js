import React from "react";
import "./Login.css";
import { Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <PageHeader className="site-page-header" title="로그인" />
        <div className="login-wrap">
        이메일
        <Form.Item
          name="username"
          rules={[
          {
            type: 'email',
            message: '올바른 형식의 이메일이 아닙니다!',
          },
          {
            required: true,
            message: '이메일을 입력해 주세요!',
          },
        ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="이메일" />
        </Form.Item>
        비밀번호
        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해 주세요!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" >
          로그인 
          </Button>
          <div className="txt-register">
          계정이 필요하신가요? <a href="">가입하기</a>
          </div>
        </Form.Item>
        </div>
      </Form>
    );
  };
  
  export default Login;