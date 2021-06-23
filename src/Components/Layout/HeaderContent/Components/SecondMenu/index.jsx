import React, { useRef } from "react";
import Container from "../../../../Atoms/Container";
import { CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss";
import { Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth_logout } from "../../../../../redux/reducers/authReducer";

export default function SecondMenu({ modalCartRef }) {
  function openModalCart(e) {
    modalCartRef.current.open();
    e.preventDefault();
  }
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  function _logout() {
    dispatch(auth_logout());
    console.log("a");
  }

  //Drop down
  const account = (
    <Menu className="secondMenu-submenu">
      <Menu.Item>
        <Link to="/cart">
          <Button type="link" href="/#">
            CART
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/check-out">
          <Button type="link" href="/#">
            CHECK OUT
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/my-account">
          <Button type="link" href="/#">
            MY ACCOUNT
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item className="buttonLogout">
        <Button type="link" onClick={_logout}>
          LOG OUT
        </Button>
      </Menu.Item>
    </Menu>
  );

  //Style
  const buttonStyle = {
    display: "inline",
    lineHeight: 0,
    padding: "0",
  };

  let cart = useSelector((state) => state.cart);
  return (
    <Container className="secondMenu">
      {!auth.isLogged ? (
        <Link to="/auth">
          <Button
            type="link"
            style={buttonStyle}
            className="secondMenu-button button"
          >
            LOGIN
          </Button>
        </Link>
      ) : (
        <Dropdown overlay={account} placement="bottomRight">
          <Button
            type="link"
            style={buttonStyle}
            className="secondMenu-button button"
          >
            {auth.user.email}
            <CaretDownOutlined className="secondMenu-button-icon" />
          </Button>
        </Dropdown>
      )}

      <Button
        type="link"
        style={buttonStyle}
        className="secondMenu-button"
        onClick={(e) => openModalCart(e)}
      >
        <ShoppingCartOutlined />
        {`${cart.num} ITEMS`}
      </Button>
    </Container>
  );
}
