import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import gsapUp from "../../Functions/gsapUp";
import "./index.scss";

class BannerCenter extends React.Component {
  render() {
    const { imageUrl, title, description, cta, darktheme, link } = this.props;
    // style Banner
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
        <Col xl={{ span: 12 }} align="center" className="banner-Row-Col">
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
            <Link to={link}>{cta}</Link>
          </Button>
        </Col>
      </Row>
    );
  }
}

export default BannerCenter;
