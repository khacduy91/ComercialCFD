import { Carousel } from "antd";
import React from "react";
import Banner from "./Banner";
import Container from "../../../../Atoms/Container";
import "./index.scss";
import { imgUrl } from "../../../../../api/config";

class HeroBanner extends React.Component {
  render() {
    const setting = {
      pauseOnHover: true,
      dotPosition: "bottom",
      autoplaySpeed: 5000,
      autoplay: true,
      dots: { className: "custom-dots" },
      lazyload: true,
      draggable: true,
      swipeToSlide: true,
    };
    return (
      <Container className="heroBanner">
        <Carousel {...setting}>
          <Banner
            number="1"
            imageUrl={`${imgUrl}Image/HomeBanner/trucash-page-banner-background-1-1024x433.png`}
            title="New Arrrivals"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Discover Now"
            isBannerCenter="true"
            link="/shop/category/laptop-thiet-bi-it-id1846"
            darktheme
          ></Banner>

          <Banner
            number="2"
            imageUrl={`${imgUrl}Image/HomeBanner/banner2.jpg`}
            title="LADIES"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Buy Now"
            link="/shop/category/lam-dep-suc-khoe-id1520"
            darktheme
          ></Banner>

          <Banner
            number="3"
            imageUrl={`${imgUrl}Image/HomeBanner/banner1.jpg`}
            title="SPORT"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            cta="Shop Now"
            darktheme
            link="/shop/category/the-thao-da-ngoai-id1975"
          ></Banner>
        </Carousel>
      </Container>
    );
  }
}

export default HeroBanner;
