import { Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  cart_changeCartNum,
  cart_removeCartItem,
} from "../../../../redux/reducers/cartReducer";

import "../index.scss";

export default function ModalCartItem(product) {
  const dispatch = useDispatch();
  function handleClick(value) {
    let _id = product._id;
    dispatch(cart_changeCartNum({ _id, value }));
  }
  function _remove() {
    dispatch(cart_removeCartItem(product));
  }
  return (
    <li className="modalCartItem">
      <Row className="modalCartItem-row">
        <Col span={6} c>
          <img
            src={product?.imageUrl}
            alt=""
            className="modalCartItem-row-img"
          />
        </Col>
        <Col span={18} className="modalCartItem-row-col">
          <p className="modalCartItem-row-col-title">{product?.name}</p>
          <p className="modalCartItem-row-col-price">{product?.price.toLocaleString()}</p>
          <div className="modalCartItem-row-control">
            <div className="modalCartItem-row-control-value">
              <button onClick={() => handleClick(-1)}>-</button>
              <input type="text" value={product?.cartNum} disabled />
              <button onClick={() => handleClick(1)}>+</button>

            </div>

            <button
              className="modalCartItem-row-control-remove"
              onClick={_remove}
            >
              x
            </button>
          </div>
        </Col>
      </Row>
    </li>
  );
}
