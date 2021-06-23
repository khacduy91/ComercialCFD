import { Badge, Button, Col, Dropdown, Menu, Row, Space } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../../Atoms/Container";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./index.scss";
import { useSelector } from "react-redux";
import ButtonGroup from "antd/lib/button/button-group";

export default function MobileMenu() {
  function _Menu(x, y) {
    const background = document.getElementById("mobileMenu-container");
    const menu = document.querySelector(".mobileMenu-container");
    background.style.transform = `scale(${x})`;
    menu.style.opacity = y;
    if (document.body.classList.contains("modal-open")) {
      console.log(document.body.classList.contains("modal-open"));
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
  }

  let num = useSelector((state) => state.cart.num);

  window.addEventListener("scroll", function scroll(params) {
    let body = document.body.getBoundingClientRect();
    let mobileMenuFooter = document
      .querySelector(".mobileMenu-footer")
      .getBoundingClientRect();
    let footerContent = document
      .querySelector(".footerContent")
      .getBoundingClientRect();

    if (body.top - footerContent.top === mobileMenuFooter.top) {
      console.log(body.top, footerContent.top, mobileMenuFooter.top);
    }
  });

  return (
    <Container className="mobileMenu">
      <Row align="middle" justify="space-between">
        <Col xs={{ span: 12 }} sm={{ span: 12 }}>
          <Link to="/">
            <img
              src="/Image/4375057785_952d0b97-7f3e-419b-8ed4-4c8e62fac080.png"
              alt="mobile-logo"
              id="mobile-logo"
            />
          </Link>
        </Col>

        {/* Burger Menu */}
        <Col
          xs={{ span: 8 }}
          sm={{ span: 8 }}
          className="MobileMenu-Col"
          align="right"
        >
          <MenuOutlined id="mobileMenu" onClick={() => _Menu(100, 1)} />
          <div id="mobileMenu-container"></div>
          <div className="mobileMenu-container">
            <button
              onClick={() => _Menu(0, 0)}
              className="mobileMenu-container-close"
            >
              x
            </button>
            <ul>
              <div className="line"></div>
              <li className="mobileMenu-container-item">
                <Link to="/" onClick={() => _Menu(0, 0)}>
                  HOME
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link
                  to="/shop/category/dien-thoai-may-tinh-bang-id1789"
                  onClick={() => _Menu(0, 0)}
                >
                  SHOP
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link onClick={() => _Menu(0, 0)}>ABOUT</Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link onClick={() => _Menu(0, 0)}>NEWS</Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link to="/cart" onClick={() => _Menu(0, 0)}>
                  CART
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link to="/my-account" onClick={() => _Menu(0, 0)}>
                  MY-ACCOUNT
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mobileMenu-footer">
        <Col xs={{ span: 4 }} className="mobileMenu-footer-Col">
          <Badge count={num} size="small" offset={[-3, 3]} overflowCount={9}>
            <ShoppingOutlined className="mobileMenu-footer-icon" />
          </Badge>
        </Col>
        <Col xs={{ span: 10 }} className="mobileMenu-footer-Col">
          <Button type="primary" className="mobileMenu-footer-Col-Button">
            Xem Gio Hang
          </Button>
        </Col>
        <Col xs={{ span: 10 }} className="mobileMenu-footer-Col">
          <Button type="primary" className="mobileMenu-footer-Col-Button">
            Check out
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
