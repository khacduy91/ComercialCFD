import { Button, Col, Row } from "antd";
import React from "react";
import countDown from "../../Functions/countDown";
import Container from "../Container";
import "./index.scss";

class CountdownCard extends React.Component {
  render() {
    const {
      productName,
      productPrice,
      productDescription,
      productPriceAfterDiscount,
    } = this.props;

    countDown();
    //Style

    return (
      <Container width="100%" className="countdownCard">
        <p className="countdownCard-Ribbon">
          <strong>SALE</strong>
        </p>
        <p className="countdownCard-Name">{productName}</p>

        <span className="countdownCard-Price">{productPrice}</span>

        <span className="countdownCard-PromoPrice">
          {productPriceAfterDiscount}
        </span>

        <p className="countdownCard-Description">{productDescription}</p>
        <Button className="countdownCard-Button" size="large">
          Shop Now
        </Button>

        <Row gutter="12" justify="center" className="countdownCard-Countdown">
          <Col
            span="5"
            className="countdownCard-Countdown-Col"
            style={{ padding: "0px" }}
          >
            <div
              className="countdownCard-Countdown-div"
              style={{ borderLeftWidth: "10px" }}
            >
              <span id="days"></span>
              <p>DAY(S)</p>
            </div>
          </Col>
          <Col
            span="5"
            className="countdownCard-Countdown-Col"
            style={{ padding: "0px" }}
          >
            <div className="countdownCard-Countdown-div">
              <span id="hours"></span>
              <p>HOUR(S)</p>
            </div>
          </Col>
          <Col
            span="5"
            className="countdownCard-Countdown-Col"
            style={{ padding: "0px" }}
          >
            <div className="countdownCard-Countdown-div">
              <span id="minutes"></span>
              <p>MINUTES(S)</p>
            </div>
          </Col>
          <Col
            span="5"
            className="countdownCard-Countdown-Col"
            style={{ padding: "0px" }}
          >
            <div
              className="countdownCard-Countdown-div"
              style={{ borderRightWidth: "10px" }}
            >
              <span id="seconds"></span>
              <p>SECOND(S)</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CountdownCard;
