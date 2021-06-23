import { Button } from "antd";
import React from "react";
import Container from "../../../Atoms/Container";

export default function EmptyCart() {
  return (
    <Container width="80%" className="emptyCart">
      <p className="emptyCart-title">Your cart is empty 🙁</p>
      <p className="emptyCart-des">
        Looks like you have not made your choice yet...
      </p>
      <Button className="emptyCart-button" size="large">
        Return To Shop
      </Button>
    </Container>
  );
}
