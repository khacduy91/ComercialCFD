import { Col, Row, Collapse } from "antd";
import React, { useEffect } from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import CustomHead from "../../Atoms/CustomHead";
import Service from "../../Atoms/Service";
import useDateToLocaleString from "../../../core/hook/useDateToLocaleString";
import "./index.scss";
import { useSelector } from "react-redux";
import { shop_categories } from "../../../redux/reducers/shopReducer";
import shopApi from "../../../api/shopApi";
import useCheckCategory from "../../../core/hook/useCheckCategory";
import Order from "./Order";
import Info from "./Info";

export default function MyAccount() {
  let recipe = JSON.parse(localStorage.getItem("recipe"));

  let dispatch = useDispatch();
  const categoriesArray = useSelector((state) => state.shop.categories);

  useEffect(() => {
    if (categoriesArray.length === 0) {
      shopApi.category().then(function (data) {
        dispatch(shop_categories(data));
      });
    }
  }, []);

  const match = useRouteMatch();

  return (
    <>
      <CustomHead title="My Account" />
      <Row className="myAccount" gutter={[15, 15]}>
        <Col
          className="myAccount-tab"
          xl={{ span: 8 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <ul className="myAccount-list">
            <li
              className="myAccount-list-item"
              style={{ borderTop: "0.5px solid #00000030" }}
            >
              <Link to={`${match.path}`}>My order</Link>
            </li>
            <li className="myAccount-list-item">
              <Link to={`${match.path}/account`}>My account</Link>
            </li>
          </ul>
        </Col>

        <Col className="myAccount-content" xl={{ span: 16 }}>
          <Switch>
            <Route exact path={`${match.path}/c`} component={Info} />
            <Route
              exact
              path={`${match.path}`}
              component={() => (
                <Order recipe={recipe} categoriesArray={categoriesArray} />
              )}
            />
          </Switch>
        </Col>
      </Row>
      <Service />
    </>
  );
}

export function HeaderPanel(props) {
  const { amount, categories, date, shipping } = props;

  const { day } = useDateToLocaleString(date);

  return (
    <Row className="headerPanel">
      <Col xl={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
        <p className="headerPanel-text">
          Đơn hàng số: <strong style={{ marginLeft: "5px" }}>EA2568</strong>
        </p>
        <p className="headerPanel-text date">{day}</p>
      </Col>

      <Col xl={{ span: 16 }} sm={{ span: 12 }} xs={{ span: 24 }}>
        <p className="headerPanel-text category">
          {categories &&
            categories.map((ele, index) => <CategoryTag id={ele} />)}
        </p>
        <p className="headerPanel-text price">
          {(shipping
            ? amount * 1.1 + shipping.value
            : amount * 1.1
          ).toLocaleString()}
        </p>
      </Col>
    </Row>
  );
}

export function CategoryTag(props) {
  const { id } = props;
  const { categoriesName, categoriesSlug } = useCheckCategory(id);
  return <span>{categoriesName}</span>;
}
