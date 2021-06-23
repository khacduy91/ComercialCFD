import React from "react";

import CustomHead from "../../Atoms/CustomHead";
import ShopDetail from "./Components/ShopDetail";
import "./index.scss";

export default function ShopPage() {
  return (
    <>
      <CustomHead title="Products" />
      <ShopDetail />
    </>
  );
}
