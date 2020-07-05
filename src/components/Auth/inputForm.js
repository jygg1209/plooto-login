import React from "react";
import "./Login.css";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const InputForm = (props) => {
  return (
    <>
      이메일
      <Form.Item
        name="username"
        rules={[
          {
            type: "email",
            message: "올바른 형식의 이메일이 아닙니다!",
          },
          {
            required: true,
            message: "이메일을 입력해 주세요!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="이메일"
        />
      </Form.Item>
      비밀번호
      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해 주세요!" }]}
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
      {!props.loginMode && (
        <>
        비밀번호 확인
          <Form.Item
            name="repassword"
            rules={[
              { required: true, message: "비밀번호를 다시 입력해 주세요!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호 확인"
            />
          </Form.Item>
          휴대폰 번호
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "휴대폰 번호를 입력해 주세요!" },
            ]}
          >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="mobile"
            placeholder="휴대폰 번호 (- 없이 숫자만)"
          />
          </Form.Item>
        </>
      )}
    </>
  );
};

export default InputForm;
