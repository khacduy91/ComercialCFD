import { Col, Row } from "antd";

import React from "react";
import Container from "../../../../Atoms/Container";
import TitleSection from "../../../../Atoms/TitleSection";
import "./index.scss";
import BannerProduct from "../../../../Atoms/BannerProduct";
import ProductCard from "../../../../Atoms/ProductCard";
import { imgUrl } from "../../../../../api/config";

class SectionMenWomen extends React.Component {
  render() {
    return (
      <Container width="100%" className="sectionMenWomen" maxWidth="1140px">
        {/* Title  */}
        <TitleSection
          title="Categories"
          description="Lorem ipsum dolor sit amet"
          align="left"
        />

        {/* Content  */}
        <Container width="100%">
          <Row gutter={[24, 36]}>
            <Col
              xl={{ span: 12 }}
              md={{ span: 12, order: 1 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <BannerProduct
                imageUrl={`${imgUrl}Image/ProductBanner/electricty.jpg`}
                title="Electricial"
                description="Thiết bị điện"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                gutter="12"
                link="/shop/category/dien-gia-dung-id1882"
              />
            </Col>

            {/* Right Col  */}
            <Col
              xl={{ span: 12 }}
              md={{ span: 12, order: 2 }}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <BannerProduct
                imageUrl={`${imgUrl}Image/ProductBanner/photograph.jpg`}
                title="Photograph"
                description="Máy ảnh"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                gutter="12"
                link="/shop/category/may-anh-quay-phim-id1801"
                darkTheme
              />
            </Col>

            <Col
              xl={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24, order: 3 }}
              xs={{ span: 24, order: 3 }}
            >
              <BannerProduct
                imageUrl={`${imgUrl}Image/ProductBanner/book.jpg`}
                title="Book"
                description="Sách"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                gutter="12"
                link="/shop/category/sach-vpp-qua-tang-id8322"
                darkTheme
              />
            </Col>

            <Col
              xl={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24, order: 4 }}
              xs={{ span: 24, order: 4 }}
            >
              <BannerProduct
                imageUrl={`${imgUrl}Image/ProductBanner/mobile.jpg`}
                title="Mobile"
                description="Điện thoại"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                link="/shop/category/dien-thoai-may-tinh-bang-id1789"
                gutter="12"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default SectionMenWomen;
