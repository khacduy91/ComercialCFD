import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import "./index.scss";

class BannerProduct extends React.Component {
  render() {
    const {
      imageUrl,
      title,
      description,
      cta,
      className,
      darkTheme,
    } = this.props;
    // Banner Style

    return (
      <Container
        imageUrl={imageUrl}
        // width={`calc(100% - ${gutter}px)`}
        className={`${className} bannerProduct`}
        height="100%"
      >
        <Container width="100%" height="100%">
          <Container height="100%" className="bannerProduct-darktheme">
            <Link to="/" className={darkTheme && "bannerProduct-darktheme"}>
              {title}
            </Link>
            <p className={darkTheme && "bannerProduct-darktheme"}>
              {description}
            </p>
            <Button
              className={`${darkTheme && "bannerProduct-Button-darktheme"
                } bannerProduct-Button`}
            >
              {cta}
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default BannerProduct;
