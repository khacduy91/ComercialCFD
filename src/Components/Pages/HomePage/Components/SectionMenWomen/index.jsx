import { Col, Row } from "antd";

import React from "react";
import Container from "../../../../Atoms/Container";
import TitleSection from "../../../../Atoms/TitleSection";
import "./index.scss";
import BannerProduct from "../../../../Atoms/BannerProduct";
import ProductCard from "../../../../Atoms/ProductCard";

class SectionMenWomen extends React.Component {
  render() {
    return (
      <Container width="100%" className="sectionMenWomen" maxWidth="1140px">
        {/* Title  */}
        <TitleSection
          title="Men & Women"
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
              <Row gutter="24">
                {/* Product Card */}
                <ProductCard
                  productName="Red Polo Shirt"
                  productPrice="120"
                  imageUrl="Image/Product/RedPoloShirt.png"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                />

                {/* Product Card */}
                <ProductCard
                  productName="Leather Oxford Shoes"
                  productPrice="190"
                  imageUrl="/Image/Product/Leather oxford shoes.png"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                />
              </Row>
            </Col>

            {/* Right Col  */}
            <Col
              xl={{ span: 12 }}
              md={{ span: 12, order: 2 }}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <BannerProduct
                imageUrl="./Image/ProductBanner/MenProduct.jpg"
                title="MEN'S"
                description="PRODUCTS"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                gutter="12"
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
                imageUrl="./Image/ProductBanner/WoMenProduct.jpg"
                title="WOMEN'S"
                description="PRODUCTS"
                cta="View All Products"
                className="sectionMenWomen-BannerProduct"
                gutter="12"
              />
            </Col>

            <Col
              xl={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24, order: 4 }}
              xs={{ span: 24, order: 4 }}
            >
              <Row gutter="24">
                <ProductCard
                  productName="Leather Oxford Shoes"
                  productPrice="190"
                  imageUrl="/Image/Product/Leather oxford shoes.png"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                />
                <ProductCard
                  productName="Leather Oxford Shoes"
                  productPrice="190"
                  imageUrl="/Image/Product/Leather oxford shoes.png"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default SectionMenWomen;
