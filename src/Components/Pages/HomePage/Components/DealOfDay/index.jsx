import { Col, Row } from "antd";
import React from "react";
import Container from "../../../../Atoms/Container";
import CountdownCard from "../../../../Atoms/CoundownCard";
import TitleSection from "../../../../Atoms/TitleSection";
import "./index.scss";

class DealOfDay extends React.Component {
  render() {
    return (
      <Container width="100%" className="dealOfDay" maxWidth="1140px">
        <TitleSection title="Deal Of The Day" align="left" />
        <Container width="100%" className="dealOfDay-Container">
          <Row gutter={12} align="middle">
            <Col xl={{ span: 12 }} lg={{ span: 14 }} md={{ span: 24 }}>
              <CountdownCard
                productName="Ladies Bags"
                productDescription="
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                productPrice="$250.00"
                productPriceAfterDiscount="$150.00"
              />
            </Col>
            <Col xl={{ span: 12 }} lg={{ span: 10 }} md={{ span: 24 }}>
              <img
                src="https://diviecommerce.aspengrovestudio.com/wp-content/uploads/2017/11/today_deal-1.png"
                alt="bag"
                className="dealOfDay-Image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default DealOfDay;
