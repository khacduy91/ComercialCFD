import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Container from "../../../../../Atoms/Container";
import Label from "../../../../../Atoms/Label";
import LinkCategory from "../../../../../Atoms/LinkCategory";
import shopApi from "../../../../../../api/shopApi.jsx";
import { shop_categories } from "../../../../../../redux/reducers/shopReducer";
import "./index.scss";
import { Select } from "antd";
import { useRouteMatch } from "react-router-dom";
import useCheckCategory from "../../../../../../core/hook/useCheckCategory";

export default function MenuCategory() {
  //Fetch Category
  let categories = useSelector((state) => state.shop.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    shopApi.category().then(function (data) {
      dispatch(shop_categories(data));
    });
  }, []);

  return (
    <Container className="menuCategory">
      <ul className="menuCategory-ul">
        <Label>PRODUCT CATEGORIES</Label>
        {categories?.map((ele, index) => (
          <li className="menuCategory-ul-li">
            <LinkCategory to={ele.slug} title={ele.title} id={ele.id} />
          </li>
        ))}
      </ul>

      <Select
        size="large"
        defaultValue="Categories"
        className="menuCategory-Select"
      >
        {categories?.map((ele, index) => (
          <li>
            <LinkCategory
              to={ele.slug}
              title={ele.title}
              id={ele.id}
              className="menuCategory-ul-li"
            />
          </li>
        ))}
      </Select>
    </Container>
  );
}
