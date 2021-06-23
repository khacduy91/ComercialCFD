import React from "react";
import { Col, Row, Table, Space } from "antd";
import useDateToLocaleString from "../../../../core/hook/useDateToLocaleString";
import "./index.scss";

export default function Invoice(props) {
  const { listCart, date, amount, shipping } = props;

  const columns = [
    {
      title: "",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img src={imageUrl} alt="" className="invoice-cart-table-img" />
      ),
    },
    {
      title: <Space className="invoice-cart-table-title name">Name</Space>,
      dataIndex: "name",
      key: "name",
      render: (name) => <Space className="invoice-cart-table-td">{name}</Space>,
    },
    {
      title: <Space className="invoice-cart-table-title price">Price</Space>,
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <Space className="invoice-cart-table-td price">
          {price.toLocaleString()}
        </Space>
      ),
    },
    {
      title: (
        <Space className="invoice-cart-table-title quanity">Quanity</Space>
      ),
      dataIndex: "cartNum",
      key: "cartNum",
      render: (cartNum) => (
        <Space className="invoice-cart-table-td quanity">{cartNum}</Space>
      ),
    },
    {
      title: <Space className="invoice-cart-table-title total">Total</Space>,
      key: "action",
      render: (text, record) => (
        <Space className="invoice-cart-table-td total">
          {(record.price * record.cartNum).toLocaleString()}
        </Space>
      ),
    },
  ];

  const { day } = useDateToLocaleString(date);

  return (
    <div className="invoice">
      <Row className="invoice-header" gutter={[10, 10]}>
        <Col
          className="invoice-header-col"
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <h3 className="invoice-logo">INVOICE</h3>
        </Col>

        <Col
          className="invoice-header-col"
          xl={{ span: 6 }}
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 6 }}
          xs={{ span: 24 }}
        >
          <p className="invoice-header-col-text">Vu Khac Duy</p>
          <p className="invoice-header-col-text">0903.775.828</p>
          <p className="invoice-header-col-text elipse">
            vukhacduy2709@gmail.com
          </p>
        </Col>

        <Col
          className="invoice-header-col"
          xl={{ span: 6 }}
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 6 }}
          xs={{ span: 24 }}
        >
          <p className="invoice-header-col-text">
            P25 cư xá Phú Lâm A p12 Q6, TPHCM
          </p>
        </Col>
      </Row>

      <Row className="invoice-client">
        <Col className="invoice-client-col" xl={{ span: 8 }} xs={{ span: 24 }}>
          <p className="invoice-client-col-label">Client</p>
          <p className="invoice-client-col-text name">CHONG CHAT CHEM</p>
          <p className="invoice-client-col-text">
            87 Hàm Nghi Phường Nguyễn Thái Bình Quận 1, TpHCM
          </p>
        </Col>
        <Col className="invoice-client-col" xl={{ span: 4 }} xs={{ span: 12 }}>
          <p className="invoice-client-col-label">Invoice Number</p>
          <p className="invoice-client-col-text number">EA2568</p>
          <p className="invoice-client-col-label">Date Of Issue</p>
          <p className="invoice-client-col-text day">{day}</p>
        </Col>
        <Col
          className="invoice-client-col total"
          xl={{ span: 12 }}
          xs={{ span: 12 }}
        >
          <p className="invoice-client-col-label">Invoice Total</p>
          <p className="invoice-client-col-text total">
            {(shipping
              ? amount * 1.1 + shipping.value
              : amount * 1.1
            ).toLocaleString()}
          </p>
        </Col>
      </Row>

      <Row className="invoice-cart">
        <Table
          dataSource={listCart}
          columns={columns}
          className="invoice-cart-table"
          table-layout="auto 100%"
          //   scroll={{ y: 500 }}
          pagination={false}
          {...props}
          summary={(pageData, { shipping } = props) => {
            let subTotal = 0;

            pageData.forEach(({ price, cartNum }) => {
              let a = price * cartNum;
              subTotal += a;
            });

            let tax = subTotal * 0.1;
            let shippingValue = shipping ? shipping.value : 0;

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td">
                    Subtotal
                  </Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td total">
                    {subTotal.toLocaleString()}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td">
                    Tax (10%)
                  </Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td total">
                    {tax.toLocaleString()}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                {shipping && (
                  <Table.Summary.Row>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell className="invoice-cart-table-td">
                      Shipping ({shipping.name})
                    </Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell className="invoice-cart-table-td shipping">
                      {shipping.value.toLocaleString()}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                )}

                <Table.Summary.Row>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td">
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell className="invoice-cart-table-td finalPrice">
                    {(subTotal + tax + shippingValue).toLocaleString()}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </Row>
    </div>
  );
}
