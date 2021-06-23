import React from "react";
import Invoice from "../Invoice";
import { Collapse } from "antd";
import { HeaderPanel } from "..";

export default function Order(props) {
  const { Panel } = Collapse;
  const { recipe, categoriesArray } = props;
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
