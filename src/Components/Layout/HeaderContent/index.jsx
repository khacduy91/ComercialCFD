import { Col, Row } from "antd";
import React from "react";
import Container from "../../Atoms/Container";
import HearderContact from "./Components/HearderContact";
import MainHeader from "./Components/MainHeader";
import MobileMenu from "./Components/MobileMenu";
import SecondMenu from "./Components/SecondMenu";
import "./index.scss";

export default function HeaderContent({ modalCartRef }) {
  return (
    <Container className="headerContent" maxWidth="1140px" paddingTop="9.75px">
      {/* TopHeader */}
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 14 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <HearderContact phone=" (888) 999-1234" />
        </Col>
        <Col md={{ span: 10 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <SecondMenu modalCartRef={modalCartRef} />
        </Col>
      </Row>
      {/* END TopHeader */}

      <MainHeader />
      <MobileMenu />
    </Container>
  );
}
