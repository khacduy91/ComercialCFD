import React, { useEffect } from "react";
import Invoice from "../Invoice";
import { Collapse } from "antd";
import { HeaderPanel } from "..";
import { useDispatch, useSelector } from "react-redux";
import shopApi from "../../../../api/shopApi";
import { shop_categories } from "../../../../redux/reducers/shopReducer";
import { useRouteMatch } from "react-router-dom";

export default function Order(props) {
  const { Panel } = Collapse;

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
    <div className="myAccount-content-wrapper order-content">
      {/* Collapse  */}
      <Collapse
        // defaultActiveKey={["1"]}
        expandIconPosition="right"
        className="myAccount-content-wrapper-collapse "
      >
        {recipe ? (
          recipe.map((ele, index) => (
            <Panel
              header={
                <HeaderPanel {...ele} categoriesArray={categoriesArray} />
              }
              key={index + 1}
              className="order-content-panel"
            >
              <Invoice {...ele} />
            </Panel>
          ))
        ) : (
          <div>Bạn chưa order gì hết luôn đó</div>
        )}
      </Collapse>
      {/* End Collapse  */}
    </div>
  );
}
