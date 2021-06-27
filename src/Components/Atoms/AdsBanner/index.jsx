import React from "react";
import "./index.scss";
import Container from "../Container";
import { Button, Col, Row } from "antd";
import { imgUrl } from "../../../api/config";

class AdsBanner extends React.Component {
  render() {
    return (
      <Container
        width="90%"
        height="100%"
        imageUrl={`${imgUrl}Image/HomeBanner/AdsBanner1.jpg`}
        className="adsBanner"
      >
        <Row>
          <Col
            xl={{ span: 8 }}
            lg={{ span: 0 }}
            md={{ span: 0 }}
            sm={{ span: 0 }}
            xs={{ span: 0 }}
          ></Col>
          <Col
            xl={{ span: 16 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <p className="adsBanner-title">
              GET A <span>$50</span> DISCOUNT ON YOUR FIRST ORDER!
            </p>
            <p className="adsBanner-description">Sign up for our Newsletter</p>
            <input
              type="text"
              placeholder="Email Address"
              className="adsBanner-input"
            />
            <Button className="adsBanner-button" type="primary">
              SIGN UP
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdsBanner;
