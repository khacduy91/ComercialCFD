import { Carousel } from "antd";
import React from "react";
import Banner from "./Banner";
import Container from "../../../../Atoms/Container";
import "./index.scss";

class HeroBanner extends React.Component {
  render() {
    const setting = {
      pauseOnHover: true,
      dotPosition: "bottom",
      autoplaySpeed: 5000,
      autoplay: true,
      dots: { className: "custom-dots" },
      lazyload: true,
    };
    return (
      <Container className="heroBanner">
        <Carousel {...setting}>
          <Banner
            number="1"
            imageUrl="Image/HomeBanner/banner3.jpg"
            title="New Arrrivals"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Discover Now"
            isBannerCenter="true"
          ></Banner>

          <Banner
            number="2"
            imageUrl="Image/HomeBanner/banner2.jpg"
            altProduct="Banner 2"
            productImage_lg="https://diviecommerce.aspengrovestudio.com/wp-content/uploads/2017/11/today_deal-8.png"
            productImage_md="https://diviecommerce.aspengrovestudio.com/wp-content/uploads/2017/11/today_deal-8-510x448.png"
            productImage_sm="https://diviecommerce.aspengrovestudio.com/wp-content/uploads/2017/11/today_deal-8-300x263.png"
            title="LADIES BAG"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Buy Now"
          ></Banner>

          <Banner
            number="3"
            imageUrl="Image/HomeBanner/banner1.jpg"
            title="t-shirt sale"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Shop Now"
            darktheme
            reflect
          ></Banner>
        </Carousel>
      </Container>
    );
  }
}

export default HeroBanner;
