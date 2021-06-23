import React from "react";
import { Button, Col } from "antd";
import useFormValidate from "../../../core/hook/useFormValidate";
import { useDispatch } from "react-redux";
import InputGroup from "../../Atoms/InputGroup";
import { register } from "../../../redux/reducers/authReducer";

export default function Register() {
  let dispatch = useDispatch();

  let { error, form, submit, inputChange } = useFormValidate(
    {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    {
      rule: {
        first_name: {
          required: true,
        },
        last_name: {
          required: true,
        },
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
        confirm_password: {
          required: true,
          match: "password",
        },
      },
      message: {
        first_name: {
          required: "Họ không được để trống",
        },
        last_name: {
          required: "Tên không được để trống",
        },
        username: {
          required: "Email không được để trống",
          pattern: "Email không đúng định dạng",
        },
        confirm_password: {
          required: "Vui lòng xác nhận mật khẩu",
          match: "Vui lòng điền giống password",
        },
      },
    }
  );

  function _register() {
    error = submit();
    if (Object.keys(error).length === 0) {
      console.log(form);
      dispatch(register(form));
    }
  }

  return (
    <Col
      xl={{ span: 12 }}
      lg={{ span: 12 }}
      md={{ span: 24 }}
      sm={{ span: 24 }}
      xs={{ span: 24 }}
      className="register"
      style={{ padding: "50px" }}
    >
      <p className="register-title">Khách hàng mới</p>
      <InputGroup
        type="text"
        placeholder="First Name"
        inputChange={inputChange}
        name="first_name"
        required
        error={error}
      />
      <InputGroup
        type="text"
        placeholder="Last Name"
        inputChange={inputChange}
        name="last_name"
        required
        error={error}
      />
      <InputGroup
        type="text"
        placeholder="Email Address"
        inputChange={inputChange}
        name="username"
        required
        error={error}
      />
      <InputGroup
        type="password"
        placeholder="Password"
        inputChange={inputChange}
        name="password"
        required
        error={error}
      />
      <InputGroup
        type="password"
        placeholder="Confirm Password"
        inputChange={inputChange}
        name="confirm_password"
        required
        error={error}
      />

      <p className="register-confirm">
        Bằng cách đăng ký, bạn đã đồng ý với điều khoản và chính sách bảo mật
        của chúng tôi.
      </p>
      <div className="register-row">
        <Button
          type="submit"
          className="login-row-btnSubmit"
          size="large"
          onClick={_register}
        >
          Đăng ký
        </Button>
      </div>
    </Col>
  );
}
