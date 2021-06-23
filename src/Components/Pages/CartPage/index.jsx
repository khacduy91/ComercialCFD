import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../Atoms/Container";
import CustomHead from "../../Atoms/CustomHead";
import Service from "../../Atoms/Service";
import CartTable from "./Component/CartTable";
import EmptyCart from "./Component/EmptyCart";
import "./index.scss";
export default function CartPage() {
  let cart = useSelector((state) => state.cart);

  return (
    <>
      <CustomHead title="Cart" />
      <Container width="80%" className="cart">
        {Object.keys(cart).length === 0 ? (
          <EmptyCart />
        ) : (
            <CartTable {...cart} />
          )}
      </Container>
      <Service />
    </>
  );
}
