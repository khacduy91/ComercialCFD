import React, { useEffect } from "react";
import "./index.scss";
import Container from "../../Atoms/Container";
import { Badge, Col, Row, Button } from "antd";
import Label from "../../Atoms/Label";
import LinkCategory from "../../Atoms/LinkCategory";
import { useSelector } from "react-redux";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { imgUrl } from "../../../api/config";

export default function FooterContent({ modalCartRef }) {
  let num = useSelector((state) => state.cart.num);

  window.addEventListener("scroll", function scroll() {
    let body = document.body.getBoundingClientRect();
    let footerContent = document.querySelector(".footerContent");
    let mobileMenuFooter = document.querySelector(
      ".footerContent-mobile-footer"
    );

    if (footerContent.getBoundingClientRect().top < body.height) {
      mobileMenuFooter.classList.remove("fix");
    } else {
      mobileMenuFooter.classList.add("fix");
    }
  });

  // let location = useLocation();
  // useEffect(() => {
  //   let mobileMenuFooter = document.querySelector(
  //     ".footerContent-mobile-footer"
  //   );
  //   if (window.location.pathname.split("/")[1] !== "shop") {
  //     mobileMenuFooter.style.display = "none";
  //   } else {
  //     mobileMenuFooter.style.display = "flex";
  //   }
  // }, [location]);

  function openModalCart(e) {
    modalCartRef.current.open();
    e.preventDefault();
  }

  return (
    <>
      <Row className="footerContent-mobile-footer fix">
        <Col xs={{ span: 4 }} className="footerContent-mobile-footer-Col">
          <Badge count={num} size="small" offset={[-3, 3]} overflowCount={9}>
            <ShoppingOutlined className="footerContent-mobile-footer-icon" />
          </Badge>
        </Col>
        <Col xs={{ span: 10 }} className="footerContent-mobile-footer-Col">
          <Button
            type="primary"
            className="footerContent-mobile-footer-Col-Button"
            block
            onClick={openModalCart}
          >
            Xem Gio Hang
          </Button>
        </Col>
        <Col xs={{ span: 10 }} className="footerContent-mobile-footer-Col">
          <Button
            type="primary"
            className="footerContent-mobile-footer-Col-Button"
            block
          >
            <Link to="/check-out">Check out </Link>
          </Button>
        </Col>
      </Row>
      <Container width="100%" className="footerContent" maxWidth="1140px">
        <Container width="100%">
          <Row>
            <Col
              xl={{ span: 7 }}
              lg={{ span: 7 }}
              md={{ span: 7 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <img
                src={`${imgUrl}Image/4375057785_952d0b97-7f3e-419b-8ed4-4c8e62fac080.png`}
                alt="logo"
                className="footerContent-logo"
              />
              <p className="footerContent-description">
                This is easy to update text from footer widget area. Add here
                information about your store.
              </p>
              <p className="footerContent-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                gravida sollicitudin egestas. Ut lobortis eros vitae mauris
                cursus, vel faucibus turpis volutpat. Duis aliquam eu nibh non
                molestie sit amet…
              </p>
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 5 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {/* // Col 2  */}
              <Label color="#111111" fontSize="16px">
                ACCOUNT
              </Label>
              <LinkCategory
                to="/my-account"
                title="My Account"
                divider="true"
              />
              <LinkCategory to="/" title="Account Details" divider="true" />
              <LinkCategory to="/" title="Orders History" divider="true" />
              <LinkCategory to="/" title="Cart" divider="true" />
              <LinkCategory to="/" title="Check Out" divider="true" />
              <LinkCategory to="/shop" title="Shop" divider="true" />
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 5 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {/* / Col 3  */}
              <Label color="#111111" fontSize="16px">
                INFORMATION
              </Label>
              <LinkCategory to="/" title="About" divider="true" />
              <LinkCategory to="/" title="News" divider="true" />
              <LinkCategory to="/" title="Contact" divider="true" />
            </Col>
            <Col
              xl={{ span: 7 }}
              lg={{ span: 7 }}
              md={{ span: 7 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {/* // Col 4 */}
              <Label color="#111111" fontSize="16px">
                HOW CAN WE HELP YOU?
              </Label>
              <p className="FooterContent-description">
                Hotline: 0903.775.828 <br /> Open – Close: 09:00 – 8:00 <br />
                Mail: vukhacduy2709@gmail.com
              </p>
              <p className="FooterContent-description">
                Address: <br />
                P25 Cư xá Phú Lâm A, P.12, Q.6, TpHCM
              </p>
              <Label color="#111111" fontSize="16px">
                PAYMENT ACCEPT
              </Label>
              <Container>
                <Row gutter={[12, 12]} align="middle">
                  <Col span="6">
                    <img
                      src={`${imgUrl}Image/Payment/20201011055543!MoMo_Logo.png`}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span="6">
                    <img
                      src={`${imgUrl}Image/Payment/1280px-Mastercard-logo.svg.png`}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span="6">
                    <img
                      src={`${imgUrl}Image/Payment/ACB_Logo.png`}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
