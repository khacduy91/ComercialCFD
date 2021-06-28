import { Button, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Atoms/Container";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function SubTotalCart() {
  let styleDivider = {
    margin: "12px",
  };

  let styleCheckout = {
    marginTop: "24px",
    fontFamily: "Asap, sans-serif",
    fontSize: "15px",
    fontWeight: "500",
  };

  let styleContinueShopping = {
    marginTop: "12px",
    fontFamily: "Asap, sans-serif",
    fontSize: "13px",
    fontWeight: "500",
    padding: "0",
  };

  let cart = useSelector((state) => state.cart);

  function changeLocate(location) {
    location.pathname =
      "/ComercialCFD/shop/category/dien-thoai-may-tinh-bang-id1789";
  }

  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <>
      <Container width="100%" className="subTotalCart" marginTop="24px">
        <div className="subTotalCart-row">
          <p className="subTotalCart-label">Subtotal</p>
          <p className="subTotalCart-price">{cart?.amount.toLocaleString()}</p>
        </div>
        <Divider dashed="false" style={styleDivider} />
        <div className="subTotalCart-row">
          <p className="subTotalCart-label">Tax (10% VAT)</p>
          <p className="subTotalCart-price">
            {cart?.amount * (0.1).toLocaleString()}
          </p>
        </div>
        <Divider dashed="false" style={styleDivider} />
        <div className="subTotalCart-row">
          <p className="subTotalCart-label">
            <strong>Total</strong>
          </p>
          <p className="subTotalCart-price">
            <strong>{parseInt(cart?.amount * 1.1).toLocaleString()}</strong>
          </p>
        </div>
        <Divider dashed="false" style={styleDivider} />
        <p className="subTotalCart-note">
          Shipping cost calculated at Checkout *
        </p>
      </Container>
      <Link to="/ComercialCFD/check-out">
        <Button type="primary" block size="large" style={styleCheckout}>
          {isLogged ? "Continue to Checkout" : "Login for Checkout"}
        </Button>
      </Link>

      <Button type="link" style={styleContinueShopping}>
        <Link
          to={(location) => changeLocate(location)}
          className="subTotalCart-shopping"
        >
          <CaretLeftOutlined className="subTotalCart-icon" /> Continue Shopping
        </Link>
      </Button>
    </>
  );
}
