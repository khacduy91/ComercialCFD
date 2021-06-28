import { Button, Col, Row } from "antd";
import React from "react";
import CustomHead from "../../Atoms/CustomHead";
import { useSelector } from "react-redux";

import "./index.scss";
import { Redirect, useHistory } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  let isLogged = useSelector((state) => state.auth.isLogged);
  if (isLogged)
    return (
      <Redirect to="/ComercialCFD/shop/category/dien-thoai-may-tinh-bang-id1789" />
    );
  return (
    <>
      <CustomHead title="cart" />
      <Row gutter={[12, 12]} className="auth">
        <Login />
        <Register />
      </Row>
    </>
  );
}
