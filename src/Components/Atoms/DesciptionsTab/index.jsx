import { Skeleton, Space, Table, Tabs } from "antd";
import { useEffect, useState } from "react";

import "./index.scss";

export default function DescriptionsTab({ productDetail, isLoading }) {
  let { description, specifications } = productDetail;

  let { data, setData } = useState();

  const { TabPane } = Tabs;
  const tabBarStyle = {
    textTransform: "uppercase",
    fontFamily: "Asap, sans-serif",
    // width: "30%",
  };
  const tabPaneStyle = {
    fontFamily: "Asap, sans-serif",
    fontWeight: "500",
    color: "#888888",
    padding: "0 10px",
    textAlign: "justify",
  };

  //Table AntDesign
  const columns = [
    {
      title: "Tính Năng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá trị",
      dataIndex: "value",
      key: "value",
      render: (value) => <p dangerouslySetInnerHTML={{ __html: value }}></p>,
    },
  ];

  return (
    <div className="descriptionTab">
      {isLoading ? (
        <Skeleton title={false} paragraph={{ rows: 10 }} active>
          <Tabs></Tabs>
        </Skeleton>
      ) : (
        <Tabs
          tabPosition="top"
          tabBarStyle={tabBarStyle}
          style={{ width: "100%" }}
        >
          {description && (
            <TabPane
              tab={<p className="tabName">Mô tả</p>}
              key="1"
              style={tabPaneStyle}
            >
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </TabPane>
          )}

          {specifications && (
            <TabPane
              tab={<p className="tabName">Tính năng</p>}
              key="2"
              style={tabPaneStyle}
            >
              <Table
                columns={columns}
                dataSource={productDetail.specifications[0].attributes}
              />
            </TabPane>
          )}
        </Tabs>
      )}
    </div>
  );
}
