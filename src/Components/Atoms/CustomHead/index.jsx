import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Container from "../Container";
import useBreadcrumb from "../../../core/hook/useBreadcrumb";
import "./index.scss";

export default function CustomHead(props) {
  const routerMatch = useRouteMatch();

  const breadcrumb = useBreadcrumb(routerMatch);

  function changlocate(location, url) {
    // Cat dau / o cuoi url do se co su khac biet khi split doan String url do
    let exactUrl = url.slice(0, url.length - 1);

    location.pathname = `${exactUrl}`;
  }

  return (
    <Container className="customHead" maxWidth="1140px">
      <h1 className="customHead-title">{breadcrumb.title}</h1>
      <p className="customHead-Breadcrum">
        {breadcrumb.breadcrumb.map((ele, index) => (
          <Link to={(location) => changlocate(location, ele.url)}>
            {ele.name} /{" "}
          </Link>
        ))}
      </p>
    </Container>
  );
}
