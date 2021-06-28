import { Carousel, Col, Row, Skeleton } from "antd";
import SkeletonImage from "antd/lib/skeleton/Image";

import React, { useEffect, useRef, useState } from "react";
import Container from "../../Atoms/Container";
import "./index.scss";

export default function ImageCaurosel(props) {
  let [height, setHeight] = useState();

  let { productDetail, isLoading } = props;

  const caurosel_Ref = useRef();
  let container_Ref = useRef();

  const dataImage =
    productDetail.thumbnail_url ===
    "https://salt.tikicdn.com/assets/img/image.svg"
      ? productDetail.configurable_products[0].images
      : productDetail.images;

  const settings = {
    afterChange: function () {},
    dots: false,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    centerMode: true,
  };

  const sliderGoto = (i) => {
    caurosel_Ref.current.goTo(i, false);

    let x = document.querySelectorAll(".imageCaurosel-button-image");
    for (let i = 0; i < x.length; i++) {
      const ele = x[i];
      ele.classList.remove("imageCaurosel-button-image-active");
    }

    x[i].classList.add("imageCaurosel-button-image-active");
  };

  useEffect(() => {
    let x = document.body.getElementsByClassName("imageCaurosel");
    setHeight(x[0]?.offsetWidth);
  }, [height]);

  return (
    <Container className="imageCaurosel" name="caurosel">
      <Carousel
        ref={caurosel_Ref}
        {...settings}
        className="imageCaurosel-caurosel"
      >
        {dataImage &&
          dataImage.map((ele, index) => (
            <div style={{ height: `${height}px` }}>
              <img
                src={ele.large_url}
                alt=""
                className="imageCaurosel-mainImg"
                style={{ height: `${height}px` }}
              />
            </div>
          ))}
      </Carousel>

      <div>
        <Carousel {...settings2}>
          {dataImage &&
            dataImage.map((ele, i) => (
              <Col key={i}>
                <img
                  src={ele.medium_url}
                  alt={ele.alt}
                  onClick={() => sliderGoto(i)}
                  name="control"
                  className={`imageCaurosel-button-image ${
                    i === 0 ? "imageCaurosel-button-image-active" : ""
                  }`}
                />
              </Col>
            ))}
        </Carousel>
        {/* <Row
          gutter={[12, 12]}
          // xs={{ gutter: [12, 12] }}
          id="slider-image-control"
          className="images-thumbnail"
        >
          {dataImage &&
            dataImage.map((ele, i) => (
              <Col key={i}>
                <img
                  src={ele.medium_url}
                  alt={ele.alt}
                  onClick={() => sliderGoto(i)}
                  name="control"
                  className={`imageCaurosel-button-image ${
                    i === 0 ? "imageCaurosel-button-image-active" : ""
                  }`}
                />
              </Col>
            ))}
        </Row> */}
      </div>
    </Container>
  );
}
