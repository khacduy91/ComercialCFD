import { Col, Divider, Row, Select } from "antd";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Container from "../../../../Atoms/Container";
import MenuCategory from "./MenuCategory";
import ProductDetail from "../ProductDetail";
import ProductList from "../ProductList";
import TopRateProductList from "./TopRateProductList";

import "./index.scss";

export default function ShopDetail() {
  return (
    <Container className="sectionProductList" maxWidth="1140px">
      <Row gutter={[24, 24]}>
        <Col
          xl={{ span: 18, order: 0 }}
          lg={{ span: 16, order: 0 }}
          md={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          xs={{ span: 24, order: 1 }}
        >
          {/* // Left Bar  */}
          {/*  */}
          <Switch>
            <Route path="/shop/category/:category" component={ProductList} />
            <Route path="/shop/detail/:slug" component={ProductDetail} />
          </Switch>
        </Col>

        <Col
          xl={{ span: 5, order: 1 }}
          lg={{ span: 8, order: 1 }}
          md={{ span: 24, order: 0 }}
          sm={{ span: 24, order: 0 }}
          xs={{ span: 24, order: 0 }}
        >
          {/* // Right Bar  */}
          <MenuCategory />
          <TopRateProductList />
        </Col>
      </Row>
    </Container>
  );
}
