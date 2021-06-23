import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class BannerTwoCol extends React.Component {
  render() {
    const {
      imageUrl,
      altProduct,
      productImage_lg,
      productImage_md,
      productImage_sm,
      title,
      description,
      cta,
      reflect,
      darktheme,
    } = this.props;

    //Style
    const bannerStyle = {
      backgroundImage: `url(${imageUrl})`,
    };
    const buttonStyle = {
      color: "white",
      borderColor: "white",
    };

    return (
      <Row
        className="banner-Row"
        style={bannerStyle}
        justify="center"
        align="middle"
      >
        <Col
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          // xs={{ span: 24, offset: 0 }}
          className="banner-Row-Col"
          order={!reflect ? 1 : 2}
        >
          {
            (productImage_lg,
              productImage_md,
              productImage_sm && (
                <img
                  srcset={`${productImage_lg} 992w, ${productImage_md} 768w, ${productImage_sm} 576w`}
                  src={`${productImage_lg}`}
                  alt={altProduct}
                  className="banner-Row-Image"
                />
              ))
          }
        </Col>
        <Col
          lg={!reflect ? { span: 7, offset: 1 } : { span: 8, offset: 0 }}
          md={!reflect ? { span: 7, offset: 1 } : { span: 8, offset: 0 }}
          sm={!reflect ? { span: 7, offset: 1 } : { span: 8, offset: 0 }}
          // xs={{ span: 24, offset: 0 }}
          className="banner-Row-Col"
          order={!reflect ? 2 : 1}
        >
          <Link
            to="/"
            className="banner-Row-Link"
            style={darktheme && { color: "white" }}
          >
            {title}
          </Link>
          <p
            className="banner-Row-Description"
            style={darktheme && { color: "white" }}
          >
            {description}
          </p>
          <Button
            type="default"
            className="banner-Row-CTA"
            style={darktheme && buttonStyle}
          >
            {cta}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default BannerTwoCol;
