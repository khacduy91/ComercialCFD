import { Col, Row } from "antd";
import React from "react";
import Container from "../../Atoms/Container";
import ServiceCard from "../../Atoms/ServiceCard";
import "./index.scss";

class Service extends React.Component {
  render() {
    return (
      <Container width="100%" className="Service" maxWidth="1140px">
        <Row gutter={[12, 12]} align="middle" justify="space-between">
          <Col
            className="gutter-row"
            xl={{ span: 6 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ServiceCard
              title="FREE SHIPPING"
              description="Free shipping on all orders from USA"
            />
          </Col>
          <Col
            className="gutter-row"
            xl={{ span: 6 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ServiceCard
              title="SECURE PAYMENT"
              description="We offer safe shopping guarantee"
            />
          </Col>
          <Col
            className="gutter-row"
            xl={{ span: 6 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ServiceCard
              title="100% SATISFACTION"
              description="14 day money back guarantee"
            />
          </Col>
          <Col
            className="gutter-row"
            xl={{ span: 6 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ServiceCard
              title="ONLINE SUPPORT"
              description="We support online 24 hours a day"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Service;
