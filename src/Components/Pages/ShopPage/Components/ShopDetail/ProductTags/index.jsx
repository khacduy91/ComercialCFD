import { Button } from "antd";
import React from "react";
import Container from "../../../../../Atoms/Container";
import Label from "../../../../../Atoms/Label";
import "./index.scss";
export default function ProductTags() {
  return (
    <Container className="productTags">
      <Label>PRODUCT TAGS</Label>
      <Button size="small" className="productTags-Button">
        Autumn
      </Button>
    </Container>
  );
}
