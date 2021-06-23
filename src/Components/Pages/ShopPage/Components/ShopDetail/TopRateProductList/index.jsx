import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import shopApi from "../../../../../../api/shopApi";
import { shop_productList_TopRate } from "../../../../../../redux/reducers/shopReducer";
import HorizonProductCard from "../../../../../Atoms/HorizonProductCard";
import Label from "../../../../../Atoms/Label";
import "./index.scss";

export default function TopRateProductList() {
  const dispatch = useDispatch();
  const productList_TopRate = useSelector(
    (state) => state.shop.productList_TopRate
  );

  useEffect(() => {
    shopApi.productList_TopRate().then((data) => {
      dispatch(shop_productList_TopRate(data.data));
    });
  }, []);

  return (
    <div className="topRateProductList">
      <Label>TOP RATED PRODUCTS</Label>
      {productList_TopRate &&
        productList_TopRate
          .splice(0, 8)
          .map((ele, index) => (
            <HorizonProductCard
              imageUrl={ele.thumbnail_url}
              title={ele.name}
              price={ele.price.toLocaleString()}
              slug={ele.slug}
            />
          ))}
    </div>
  );
}
