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
import News from "./Components/Pages/News";
import NewsList from "./Components/Pages/News/NewsList";
import Info from "./Components/Pages/MyAccount/Info";



export default function App() {
  const styleHeader = {
    backgroundColor: "white",
    padding: "0px",
    height: "auto",
    lineHeight: 0,
  };

  const styleFooter = {
    padding: "0"
  }

  let modalCartRef = useRef();
  let modalSuccessCheckOutRef = useRef();
  return (
    <AppProvider reducers={reducers}>
      <Router>
        <Layout>
          <Header style={styleHeader}>
            <HeaderContent modalCartRef={modalCartRef} />
          </Header>

          <Content style={{ background: "white" }} >
            <Switch>
              <Route exact path="/ComercialCFD" component={HomePage} />
              <Route path="/ComercialCFD/shop/:slug/:slug" component={ShopPage} />
              <Route exact path="/ComercialCFD/cart" component={CartPage} />
              <Route path="/ComercialCFD/my-account" component={MyAccount} />
              <Route exact path="/ComercialCFD/check-out" component={() => (<CheckOut modalSuccessCheckOutRef={modalSuccessCheckOutRef} />)} />
              <Route exact path="/ComercialCFD/auth" component={Auth} />
              <Route  path="/ComercialCFD/news" component={News} />
         
            </Switch>
          </Content>

          <Footer  style={styleFooter}  >
            <FooterContent modalCartRef={modalCartRef}/>
          </Footer>
        </Layout>
        <ModalCart ref={modalCartRef} />
        <ModalSuccessCheckOut ref={modalSuccessCheckOutRef} />
      </Router>
    </AppProvider>
  );
}
