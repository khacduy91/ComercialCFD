import { Col, Row, Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  shop_productDetail,
  shop_set_isLoading,
} from "../../../../../redux/reducers/shopReducer";
import DescriptionsTab from "../../../../Atoms/DesciptionsTab";

import DetailProduct from "../../../../Atoms/DetailProduct";
import ImageCaurosel from "../../../../Atoms/ImageCaurosel";

import shopApi from "../../../../../api/shopApi";

import SkeletonInput from "antd/lib/skeleton/Input";
import "./index.scss";

export default function ProductDetail() {
  let routerMatch = useRouteMatch();

  let slug = routerMatch.params.slug;
  let dispatch = useDispatch();

  useEffect(
    () => (
      dispatch(shop_set_isLoading()),
      shopApi
        .productDetail(slug)
        .then((data) => dispatch(shop_productDetail(data.data[0])))
    ),
    [slug]
  );
  let productDetail = useSelector((state) => state.shop.productDetail);
  let isLoading = useSelector((state) => state.shop.isLoading);

  return (
    <>
      <Row gutter={[12, 12]} className="productDetail">
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          {/* // Image   */}

          {isLoading ? (
            <SkeletonInput
              active={true}
              style={{ width: 500, height: 300 }}
              active
            ></SkeletonInput>
          ) : (
            <ImageCaurosel productDetail={productDetail} />
          )}
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          {/* // Detail Product  */}
          {isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 8 }} active></Skeleton>
          ) : (
            <DetailProduct productDetail={productDetail} />
          )}
        </Col>

        {/* // Commnet  */}

        <DescriptionsTab productDetail={productDetail} isLoading={isLoading} />
      </Row>
    </>
  );
}
