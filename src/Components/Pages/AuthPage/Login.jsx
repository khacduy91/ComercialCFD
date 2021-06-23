import React from "react";
import { Button, Col, Row } from "antd";
import useFormValidate from "../../../core/hook/useFormValidate";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/reducers/authReducer";
import InputGroup from "../../Atoms/InputGroup";

export default function Login() {
  let dispatch = useDispatch();

  function _login() {
    error = submit();
    if (Object.keys(error).length === 0) {
      console.log(form);
      dispatch(login(form));
    }
  }
  let { error, form, submit, inputChange } = useFormValidate(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: { required: true, pattern: "email" },
        password: { required: true },
      },
      massage: {
        username: {
          required: "Username không được để trống",
        },
        password: {
          required: "Password không được để trống",
        },
      },
    }
  );
  return (
    <Col
      xl={{ span: 12 }}
      lg={{ span: 12 }}
      md={{ span: 24 }}
      sm={{ span: 24 }}
      xs={{ span: 24 }}
      className="login"
      style={{ padding: "50px" }}
    >
      <p>Khách hàng cũ</p>
      <div className="login-row">
        <InputGroup
          type="text"
          placeholder="User"
          inputChange={inputChange}
          name="username"
          required="true"
          error={error}
          isLabel={false}
        />
        <InputGroup
          type="password"
          placeholder="Password"
          inputChange={inputChange}
          name="password"
          required="true"
          error={error}
          isLabel={false}
        />
      </div>

      <div className="login-row">
        <Button
          type="submit"
          className="login-row-btnSubmit"
          size="large"
          onClick={_login}
        >
          Đăng nhập
        </Button>
      </div>
    </Col>
  );
}
