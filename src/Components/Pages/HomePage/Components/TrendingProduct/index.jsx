import { Row } from "antd";
import React from "react";
import Container from "../../../../Atoms/Container";
import TitleSection from "../../../../Atoms/TitleSection";
import ProductCard from "../../../../Atoms/ProductCard";

import "./index.scss";
import AdsBanner from "../../../../Atoms/AdsBanner";

class TrendingProduct extends React.Component {
  render() {
    return (
      <Container width="100%" className="TrendingProduct" maxWidth="1140px">
        <TitleSection
          title="Trending Products"
          align="center"
          description="Lorem ipsum dolor sit amet"
        />

        <Container width="100%">
          <Row gutter={[24, 24]} justify="center">
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
            <ProductCard
              productName="Leather Oxford Shoes"
              productPrice="190"
              imageUrl="Image/Product/RedPoloShirt.png"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              xs="12"
            />
          </Row>
        </Container>
        <AdsBanner />
      </Container>
    );
  }
}

export default TrendingProduct;
