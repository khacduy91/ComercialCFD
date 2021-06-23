import { Col, Divider, Row } from "antd";
import React from "react";
import Container from "../../../Atoms/Container";
import CartItem from "./CartItem";
import SubTotalCart from "./SubTotalCart";

export default function CartTable(cart) {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        {/* //Left Col  */}
        <Col xl={{ span: 16 }}>
          <ul>
            {cart.listCart.map((ele, index) => (
              <CartItem {...ele} key={index} />
            ))}
          </ul>
        </Col>

        {/* Right Col  */}
        <Col xl={{ span: 8 }} xs={{ span: 24 }}>
          <SubTotalCart />
        </Col>
      </Row>
    </Container>
  );
}
