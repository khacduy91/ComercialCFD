import { CaretRightFilled } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./index.scss";

export default function LinkCategory(props) {
  const { to, title, divider = false, id, className } = props;

  let routerMatchID = parseInt(
    useRouteMatch().params.slug?.split("-").pop().replace("id", ""),
    10
  );

  function changlocate(location) {
    location.pathname = `/ComercialCFD/shop/category/${to}`;
  }

  return (
    <>
      <Link
        to={(location) => changlocate(location)}
        className={`categoryLink ${
          routerMatchID === id ? "currentLink" : ""
        }  ${className}`}
      >
        <CaretRightFilled className="beforeLink" />
        {title}
      </Link>
      {divider && <Divider style={{ margin: "8px 0" }} />}
    </>
  );
}
