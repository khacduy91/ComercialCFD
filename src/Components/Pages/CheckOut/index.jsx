import { Button, Col, Divider, Input, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../core/hook/useFormValidate";
import Container from "../../Atoms/Container";
import CustomHead from "../../Atoms/CustomHead";
import InputGroup from "../../Atoms/InputGroup";
import ModalCartItem from "../../Atoms/ModalCart/Components";
import {
  cart_updateShipping,
  cart_clearCart,
} from "../../../redux/reducers/cartReducer";

import "./index.scss";
import { Redirect } from "react-router-dom";

export default function CheckOut({ modalSuccessCheckOutRef }) {
  let styleDivider = {
    margin: "12px",
  };

  let dispatch = useDispatch();

  //Cart
  const cart = useSelector((state) => state.cart);
  const isLogged = useSelector((state) => state.auth.isLogged);
  //End Cart

  // Year expire
  let yearNow = new Date().getFullYear();
  // End Year Expire

  //Form Validate
  let { form, inputChange, submit, error } = useFormValidate(
    {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      postcode: "",
      phone: "",
      shipping_option: cart.shipping_option,
      payment_option: "credit_card",
      payment_card_number: "",
      payment_card_name: "",
      payment_card_month: "",
      payment_card_year: "",
      payment_card_cvv: "",
    },
    {
      rule: {
        first_name: { required: true },
        last_name: { required: true },
        email: { required: true, pattern: "email" },
        phone: { required: true },
        city: { required: true },
        country: { required: true },
        city: { required: true },
        postcode: { required: true },

        payment_card_number: { required: true, min: 12, pattern: "visa" },
        payment_card_name: { required: true },
        payment_card_cvv: { required: true, max: 3 },
      },
      massage: {},
    }
  );

  function _click(e) {
    error = submit();

    let date = Date.now();

    if (Object.keys(error).length === 0) {
      let oldRecipe = JSON.parse(localStorage.getItem("recipe"));
      let categories = [];

      for (let i = 0; i < cart.listCart.length; i++) {
        let ele = cart.listCart[i];
        categories.push(ele.category);
      }

      if (oldRecipe === null) {
        let recipe = [
          {
            listCart: cart.listCart,
            amount: cart.amount,
            recipeData: form,
            categories: [...new Set(categories)],
            date: date,
            shipping: cart.shiping,
          },
        ];
        localStorage.setItem("recipe", JSON.stringify(recipe));
      } else {
        let recipe = {
          listCart: cart.listCart,
          amount: cart.amount,
          recipeData: form,
          categories: [...new Set(categories)],
          date: date,
          shipping: cart.shipping,
        };
        oldRecipe.push(recipe);
        localStorage.setItem("recipe", JSON.stringify(oldRecipe));
      }
      dispatch(cart_clearCart());
      openModalSuccessCheckOut(e);
    }
  }

  //End Form Validate

  //Table
  const [selectedRow, setSelectedRow] = useState([]);

  const data = [
    {
      key: "1",
      giaohang: "Giao hàng cơ bản",
      value: "standard",
      price: 30000,
      time: "Giao trong 5 - 7 ngày làm việc",
    },
    {
      key: "2",
      giaohang: "Giao hàng nhanh",
      value: "express",
      price: 40000,
      time: "Giao trong 3 - 5 ngày làm việc",
    },
    {
      key: "3",
      giaohang: "Giao hàng siêu tốc",
      value: "shipping",
      price: 50000,
      time: " Giao trong 1 - 2 ngày làm việc",
    },
    {
      key: "4",
      giaohang: "Giao hàng miễn phí",
      value: "free",
      price: 0,
      time: "Sống trong bán kính 5-10km trong nội vi TpHCM",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "giaohang",
      key: "giaohang",
    },
    {
      title: "",
      dataIndex: "price",
      key: "price",
      render: (price) => <span>{price.toLocaleString()}</span>,
    },
    {
      title: "",
      dataIndex: "time",
      key: "time",
    },
  ];

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    form.shipping_option = selectedRows[0].value;
    let payload = { name: selectedRows[0].value, value: selectedRows[0].price };
    dispatch(cart_updateShipping(payload));

    let a = document.body.getElementsByClassName("ant-table-row");
    a[0].classList.remove("ant-table-row-selected");
    a[0]
      .getElementsByTagName("td")[0]
      .getElementsByTagName("label")[0]
      .classList.remove("ant-radio-wrapper-checked");
    a[0]
      .getElementsByTagName("td")[0]
      .getElementsByTagName("span")[0]
      .classList.remove("ant-radio-checked");
  };
  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  };

  // End Tabel

  // Check Box init

  useEffect(() => {
    let a = document.getElementsByClassName("ant-table-row");
    a[0]?.classList.add("ant-table-row-selected");
    a[0]
      ?.getElementsByTagName("td")[0]
      .getElementsByTagName("label")[0]
      .classList.add("ant-radio-wrapper-checked");
    a[0]
      ?.getElementsByTagName("td")[0]
      .getElementsByTagName("span")[0]
      .classList.add("ant-radio-checked");
  }, []);

  function changeLocate(location) {
    location.pathname = "shop/category/dien-thoai-may-tinh-bang-id1789";
  }

  //End Check Box Init

  //Open Close Success Modal

  function openModalSuccessCheckOut(e) {
    modalSuccessCheckOutRef.current.open();
    e.preventDefault();
  }
  //End Open Close Success Modal

  if (cart.num === 0)
    return (
      <Redirect
        from="/check-out"
        to="/shop/category/dien-thoai-may-tinh-bang-id1789"
      />
    );
  if (!isLogged) return <Redirect from="/check-out" to="/auth" />;

  return (
    <>
      <CustomHead />
      <Row gutter={[12, 12]} className="checkout" justify="space-around">
        <Col xl={{ span: 14 }} className="checkout-Col">
          <p className="checkout-title">Thông tin đơn hàng</p>
          <Row gutter={[15, 15]} justify="space-between">
            <InputGroup
              placeholder="Họ"
              type="text"
              xl="12"
              md="12"
              sm="12"
              xs="24"
              name="first_name"
              required
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Tên"
              type="text"
              xl="12"
              md="12"
              sm="12"
              xs="24"
              name="last_name"
              required
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Email"
              type="text"
              xl="24"
              md="24"
              name="email"
              required
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Tên Công Ty"
              type="text"
              xl="24"
              md="24"
              name="company"
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Quốc Gia"
              type="text"
              xl="24"
              md="24"
              name="country"
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Địa chỉ 1"
              type="text"
              xl="24"
              md="24"
              name="address1"
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Địa chỉ 2"
              type="text"
              xl="24"
              md="24"
              name="address2"
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Thành phố"
              type="text"
              xl="12"
              md="12"
              name="city"
              required
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Mã bưu chính"
              type="text"
              xl="12"
              md="12"
              name="postcode"
              inputChange={inputChange}
              error={error}
            />
            <InputGroup
              placeholder="Điện thoại"
              type="text"
              xl="24"
              md="24"
              name="phone"
              required
              inputChange={inputChange}
              error={error}
            />
          </Row>
          <Table
            dataSource={data}
            columns={columns}
            rowSelection={{ type: "radio", ...rowSelection }}
            pagination={{ hideOnSinglePage: true }}
            bordered="true"
            title={() => "Thông tin giao hàng"}
            className="checkout-ship"
          />
          <p className="checkout-title">
            Phương thức thanh toán{" "}
            <span>
              <img src="/Image/cards.svg" alt="" />
            </span>
          </p>

          <InputGroup
            placeholder="Số thẻ"
            type="text"
            xl="24"
            md="24"
            name="payment_card_number"
            required
            inputChange={inputChange}
            error={error}
          />
          <InputGroup
            placeholder="Tên thẻ"
            type="text"
            xl="24"
            md="24"
            name="payment_card_name"
            required
            inputChange={inputChange}
            error={error}
          />
          <div className="checkout-expire">
            <select
              className="custom-select custom-select-sm"
              name="payment_card_month"
              value={form.payment_month}
              id="checkoutPaymentMonth"
              onChange={inputChange}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November </option>
              <option value="12">December</option>
            </select>
            <select
              className="custom-select custom-select-sm"
              name="payment_card_year"
              value={form.payment_card_year}
              id="checkoutPaymentCardYear"
              onChange={inputChange}
            >
              {[].map.bind([...Array(50)])((e, i) => (
                <option value={yearNow - 50 / 2 + i} key={i}>
                  {yearNow - 50 / 2 + i}
                </option>
              ))}
            </select>
            <InputGroup
              type="text"
              placeholder="CVV"
              name="payment_card_cvv"
              className="cvv"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              isLabel={false}
              inputChange={inputChange}
              error={error}
            />
          </div>
        </Col>
        {/* End Left Col  */}

        {/* //Right Col  */}
        <Col xl={{ span: 8 }}>
          <p className="checkout-title">Sản phẩm</p>
          <ul className="modalCart-table-ul">
            {cart.listCart.map((ele, index) => (
              <ModalCartItem {...ele} key={index} />
            ))}
          </ul>

          <Container
            width="100%"
            className="subTotalCart checkout-subtotal"
            marginTop="24px"
          >
            <div className="subTotalCart-row">
              <p className="subTotalCart-label">Subtotal</p>
              <p className="subTotalCart-price">
                {cart?.amount.toLocaleString()}
              </p>
            </div>
            <Divider dashed="false" style={styleDivider} />

            <div className="subTotalCart-row">
              <p className="subTotalCart-label">Tax (10% VAT)</p>
              <p className="subTotalCart-price">
                {(cart?.amount * 0.1).toLocaleString()}
              </p>
            </div>
            <Divider dashed="false" style={styleDivider} />

            <div className="subTotalCart-row">
              <p className="subTotalCart-label">Ship</p>
              <p className="subTotalCart-price">
                {cart.shipping.value.toLocaleString()}
              </p>
            </div>
            <Divider dashed="false" style={styleDivider} />

            <div className="subTotalCart-row">
              <p className="subTotalCart-label">
                <strong>Total</strong>
              </p>
              <p className="subTotalCart-price">
                <strong>
                  {parseInt(
                    cart?.amount * 1.1 + cart?.shipping.value
                  ).toLocaleString()}
                </strong>
              </p>
            </div>
            <Divider dashed="false" style={styleDivider} />
            <Button
              type="primary"
              block
              size="large"
              className="checkout-submit"
              onClick={_click}
            >
              Check Out
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
