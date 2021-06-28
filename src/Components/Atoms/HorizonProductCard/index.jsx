import React from "react";
import "./index.scss";
import Container from "../Container";
import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";

export default function HorizonProductCard(props) {
  const { imageUrl, title, price, slug } = props;

  function changeLocate(location) {
    location.pathname = `/ComercialCFD/shop/detail/${slug}`;
  }
  return (
    <Container className="horizonProductCard">
      <Row gutter={[12, 12]}>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 8 }}
        >
          <img src={imageUrl} alt="" className="horizonProductCard-image" />
        </Col>
        <Col
          xl={{ span: 16 }}
          lg={{ span: 16 }}
          md={{ span: 16 }}
          sm={{ span: 16 }}
          xs={{ span: 16 }}
        >
          <Link
            to={(location) => changeLocate(location)}
            className="horizonProductCard-title"
          >
            {title}
          </Link>
          <p className="horizonProductCard-price">{price}</p>
        </Col>
      </Row>
      <Divider className="horizonProductCard-divider" />
    </Container>
  );
}
