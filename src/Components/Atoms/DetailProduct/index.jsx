import { Divider, Row } from "antd";
import { FormProvider } from "antd/lib/form/context";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../Container";
import useCheckCategory from "../../../core/hook/useCheckCategory";
import { cart_addToCart } from "../../../redux/reducers/cartReducer";
import "./index.scss";
import { Link } from "react-router-dom";

export default function DetailProduct(props) {
  let dispatch = useDispatch();
  let { productDetail } = props;
  let name = useCheckCategory(productDetail?.categories);

  function _addToCart() {
    let data = {
      imageUrl: productDetail.thumbnail_url,
      name: productDetail.name,
      price: productDetail.real_price,
      _id: productDetail._id,
      category: productDetail.categories,
    };

    dispatch(cart_addToCart(data));
  }
  function changlocate(location) {
    let to = name?.categoriesSlug;
    location.pathname = `/shop/category/${to}`;
  }

  return (
    <Container width="100%" className="detailProduct">
      <h1 className="detailProduct-title">{productDetail?.name}</h1>

      <p className="detailProduct-price">
        {productDetail?.real_price?.toLocaleString()}
      </p>
      <p className="detailProduct-detail">{productDetail?.short_description}</p>
      <input type="number" defaultValue="1" className="detailProduct-input" />
      <button className="detailProduct-AddToCart" onClick={_addToCart}>
        Add To Cart
      </button>

      <Divider className="detailProduct-Divider" />
      <p className="detailProduct-Category">
        Category: <span>{name?.categoriesName}</span>
      </p>
    </Container>
  );
}
