import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shop_productList } from "../../../../../redux/reducers/shopReducer";
import shopApi from "../../../../../api/shopApi";
import Container from "../../../../Atoms/Container";
import ProductCard from "../../../../Atoms/ProductCard";
import { Pagination } from "antd";
import {
  shop_productList_nrpage,
  shop_set_isLoading,
  shop_category_productList,
} from "../../../../../redux/reducers/shopReducer";

import "./index.scss";
import { useRouteMatch } from "react-router-dom";

export default function ProductList() {
  let dispatch = useDispatch();
  let productList = useSelector((state) => state.shop.productList);
  let shop = useSelector((state) => state.shop);
  let categoryID = useRouteMatch()
    .params.category.split("-")
    .pop()
    .replace("id", "");

  useEffect(
    () => (
      dispatch(shop_set_isLoading()),
      shopApi
        .category_productList(categoryID)
        .then((data) => dispatch(shop_category_productList(data)))
    ),
    [categoryID]
  );

  function _changePagination(page) {
    dispatch(shop_set_isLoading());
    shopApi
      .page_productList(page, categoryID)
      .then((data) => dispatch(shop_productList_nrpage(data)));
  }

  return (
    <Container className="productList">
      <Row gutter={[36, 24]}>
        {shop.isLoading &&
          [...Array(15)].map((ele, index) => (
            <ProductCard
              productName={ele?.name}
              productPrice={ele?.price}
              imageUrl={ele?.thumbnail_url}
              loading={shop.isLoading}
              xl="8"
              lg="8"
              md="8"
              sm="12"
              xs="12"
            />
          ))}

        {!shop.isLoading &&
          productList?.data?.map((ele, index) => (
            <ProductCard
              category={ele.categories}
              productName={ele.name}
              productPrice={ele.price}
              imageUrl={
                ele.thumbnail_url ===
                "https://salt.tikicdn.com/assets/img/image.svg"
                  ? ele.configurable_products[0].images[0].large_url
                  : ele.thumbnail_url
              }
              slug={ele.slug}
              _id={ele._id}
              xl="8"
              lg="8"
              md="8"
              sm="12"
              xs="12"
            />
          ))}
        <Pagination
          defaultCurrent={productList?.paginate?.currentPage}
          total={productList?.paginate?.totalPage}
          onChange={(page) => _changePagination(page)}
          showSizeChanger={false}
          className="productList-pagination"
        />
      </Row>
    </Container>
  );
}
