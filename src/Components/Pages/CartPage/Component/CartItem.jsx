import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  cart_changeCartNum,
  cart_removeCartItem,
} from "../../../../redux/reducers/cartReducer";

export default function CartItem(product) {
  const dispatch = useDispatch();

  function _remove() {
    dispatch(cart_removeCartItem(product));
  }

  function handleClick(value) {
    let _id = product._id;
    dispatch(cart_changeCartNum({ _id, value }));
  }

  return (
    <li className="cartItem">
      <Divider type="horizontal" />
      <Row align="middle" gutter={[32, 32]}>
        <Col span={6}>
          <a href="product.html">
            <img src={product.imageUrl} alt="..." className="cartItem-Image" />
          </a>
        </Col>

        <Col span={18}>
          {/* Title */}
          <div className="cartItem-row">
            <a className="cartItem-name" href="product.html">
              {product.name}
            </a>
            <span className="cartItem-price">{product.price.toLocaleString()}</span>
          </div>
          {/* Text */}
          <p className="cartItem-attribute">
            Size: M <br />
            Color: Red
          </p>
          {/*Footer */}
          <div className="cartItem-row">
            {/* Input  */}
            <div>
              <button
                className="cartItem-button"
                onClick={() => handleClick(-1)}
              >
                -
              </button>
              <input
                type="button"
                className="cartItem-button"
                value={product.cartNum}
                disabled
              />
              <button
                className="cartItem-button"
                onClick={() => handleClick(1)}
              >
                +
              </button>
            </div>
            {/* Remove */}
            <a className="cartItem-remove" href="#!" onClick={_remove}>
              <span>x</span> Remove
            </a>
          </div>
        </Col>
      </Row>
    </li>
  );
}
