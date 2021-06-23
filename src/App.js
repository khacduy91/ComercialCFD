import React, { useRef } from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import ShopPage from "./Components/Pages/ShopPage";
import HeaderContent from "./Components/Layout/HeaderContent";
import FooterContent from "./Components/Layout/FooterContent";
import CartPage from "./Components/Pages/CartPage";
import MyAccount from "./Components/Pages/MyAccount";
import AppProvider from "./core/AppProvider";
import reducers from "./redux/reducers";
import ModalCart from "../src/Components/Atoms/ModalCart";
import CheckOut from "./Components/Pages/CheckOut";
import Auth from "./Components/Pages/AuthPage";
import ModalSuccessCheckOut from "./Components/Atoms/ModalSuccessCheckOut";

export default function App() {
  const StyleHeader = {
    backgroundColor: "white",
    padding: "0px",
    height: "auto",
    lineHeight: 0,
  };



  let modalCartRef = useRef();
  let modalSuccessCheckOutRef = useRef();
  return (
    <AppProvider reducers={reducers}>
      <Router>
        <Layout>
          <Header style={StyleHeader}>
            <HeaderContent modalCartRef={modalCartRef} />
          </Header>

          <Content style={{ background: "white" }} >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop/:slug/:slug" component={ShopPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route path="/my-account" component={MyAccount} />
              <Route exact path="/check-out" component={() => (<CheckOut modalSuccessCheckOutRef={modalSuccessCheckOutRef} />)} />
              <Route exact path="/auth" component={Auth} />

            </Switch>
          </Content>

          <Footer >
            <FooterContent />
          </Footer>
        </Layout>
        <ModalCart ref={modalCartRef} />
        <ModalSuccessCheckOut ref={modalSuccessCheckOutRef} />
      </Router>
    </AppProvider>
  );
}
