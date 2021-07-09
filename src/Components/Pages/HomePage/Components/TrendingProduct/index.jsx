import { Row } from "antd";
import React from "react";
import Container from "../../../../Atoms/Container";
import TitleSection from "../../../../Atoms/TitleSection";
import ProductCard from "../../../../Atoms/ProductCard";

import "./index.scss";
import AdsBanner from "../../../../Atoms/AdsBanner";
import { useDispatch, useSelector } from "react-redux";
import { shop_productList_TopRate } from "../../../../../redux/reducers/shopReducer";
import shopApi from "../../../../../api/shopApi";

export default function TrendingProduct() {
  const dispatch = useDispatch();
  const productList_TopRate = useSelector(
    (state) => state.shop.productList_TopRate
  );
  const shop = useSelector((state) => state.shop);

  if (productList_TopRate.length === 0) {
    shopApi.productList_TopRate().then((data) => {
      dispatch(shop_productList_TopRate(data.data));
    });
  }
  console.log(productList_TopRate);

  return (
    <Container width="100%" className="trendingProduct" maxWidth="1140px">
      <TitleSection
        title="Trending Products"
        align="center"
        description="Lorem ipsum dolor sit amet"
      />

      <Container width="100%">
        <Row gutter={[24, 24]} justify="center">
          {shop.isLoading &&
            [...Array(8)].map((index) => (
              <ProductCard
                // productName={ele?.name}
                // productPrice={ele?.price}
                // imageUrl={ele?.thumbnail_url}
                loading={shop.isLoading}
                key={index}
                xl="6"
                lg="6"
                md="6"
                sm="12"
                xs="12"
              />
            ))}

          {productList_TopRate &&
            productList_TopRate.map(
              (ele, index) =>
                index < 8 && (
                  <ProductCard
                    productName={ele?.name}
                    productPrice={ele?.price}
                    imageUrl={ele?.thumbnail_url}
                    loading={shop.isLoading}
                    slug={ele?.slug}
                    _id={ele?._id}
                    key={index}
                    xl="6"
                    lg="6"
                    md="6"
                    sm="12"
                    xs="12"
                  />
                )
            )}
        </Row>
      </Container>
      <AdsBanner />
    </Container>
  );
}
