import { Button } from "antd";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../Container";
import ModalCartItem from "./Components";
import "./index.scss";

function ModalCart(props, ref) {
  let cart = useSelector((state) => state.cart);
  let [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    []
  );

  function open() {
    setIsOpen(true);
    document.querySelector("body").classList.add("modal-open");
    // document.querySelector(".ModalCart").classList.add("ModalCart-show");
  }
  function close() {
    setIsOpen(false);
    document.querySelector("body").classList.remove("modal-open");
    // document.querySelector(".ModalCart").classList.remove("ModalCart-show");
  }

  const isLogged = useSelector((state) => state.auth.isLogged);

  return ReactDOM.createPortal(
    <>
      <Container
        height="100%"
        className={`modalCart ${isOpen ? "modalCart-show" : ""}`}
        // className="ModalCart"
      >
        {/* Header  */}
        <div className="modalCart-header">
          <p className="modalCart-header-p">Your Cart {cart.num}</p>
          <Button className="modalCart-header-button" onClick={close}>
            x
          </Button>
        </div>
        {/* Cart Table  */}
        <div className="modalCart-table">
          <ul className="modalCart-table-ul">
            {cart.listCart.map((ele, index) => (
              <ModalCartItem {...ele} key={index} />
            ))}
          </ul>
        </div>

        {/* Footer  */}
        <div className="modalCart-footer">
          <div className="modalCart-footer-subtotal">
            <p>Subtotal</p>
            <p>{cart.amount.toLocaleString()} </p>
          </div>
          <div className="modalCart-footer-cta">
            <Link
              to={isLogged ? "/check-out" : "/auth"}
              onClick={(e) => {
                ref.current.close();
              }}
            >
              <Button
                className="modalCart-footer-cta-button"
                type="primary"
                block
                size="large"
              >
                {isLogged ? "Continue to Checkout" : "Login for Checkout"}
              </Button>
            </Link>

            <Button
              className="modalCart-footer-cta-button outline"
              type="primary"
              block
              size="large"
            >
              <Link
                to="/cart"
                onClick={(e) => {
                  ref.current.close();
                }}
              >
                View Cart
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      <div
        className={`modalCart-background ${isOpen ? "modalCart-fade" : ""}`}
        onClick={(e) => close()}
      ></div>
    </>,
    document.getElementById("modal")
  );
}

export default forwardRef(ModalCart);
