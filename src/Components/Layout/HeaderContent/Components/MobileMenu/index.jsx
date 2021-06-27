import { Badge, Button, Col, Dropdown, Menu, Row, Space } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../../Atoms/Container";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";

export default function MobileMenu() {
  function _Menu(x, y, z) {
    if (document.body.classList.contains("modal-open")) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
    const background = document.getElementById("mobileMenu-container");
    const menu = document.querySelector(".mobileMenu-container");
    const close = document.querySelector(".mobileMenu-container-close");
    background.style.transform = `scale(${x})`;
    menu.style.right = y;
    close.style.right = z;
    close.style.top = z;
  }

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
          <MenuOutlined
            id="mobileMenu"
            onClick={() => _Menu(400, "0px", "20px")}
          />
          <div id="mobileMenu-container"></div>
          <div className="mobileMenu-container">
            <Button
              onClick={() => _Menu(0, "-100%", "-100%")}
              className="mobileMenu-container-close"
              size="middle"
            >
              x
            </Button>
            <ul>
              <div className="line"></div>
              <li className="mobileMenu-container-item">
                <Link to="/" onClick={() => _Menu(0, "-100%", "-100%")}>
                  HOME
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link
                  to="/shop/category/dien-thoai-may-tinh-bang-id1789"
                  onClick={() => _Menu(0, "-100%", "-100%")}
                >
                  SHOP
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <a
                  href="https://khacduy91.github.io/DuyVuCV/"
                  onClick={() => _Menu(0, "-100%", "-100%")}
                  target="_blank"
                >
                  ABOUT
                </a>
              </li>

              <li className="mobileMenu-container-item">
                <Link to="/news" onClick={() => _Menu(0, "-100%", "-100%")}>
                  NEWS
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link to="/cart" onClick={() => _Menu(0, "-100%", "-100%")}>
                  CART
                </Link>
              </li>
              <li className="mobileMenu-container-item">
                <Link
                  to="/my-account"
                  onClick={() => _Menu(0, "-100%", "-100%")}
                >
                  MY-ACCOUNT
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
