import React from "react";
import styled from "styled-components";
import "./index.scss";

export default function Container(props) {

  const {
    width,
    maxWidth,
    height,
    lineHeight,
    paddingTop,
    paddingBottom,
    direction,
    wrap,
    className,
    textAlign,
    //Content
    title,
    description,
    imageUrl,
    marginTop,
  } = props;
  const Container = styled.div`
      background-image : url("${imageUrl}");
      width: ${width};
      max-width: ${maxWidth};
      height: ${height || "auto"};
      line-height: ${lineHeight};
      margin: auto;
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      flex-wrap: ${wrap || "wrap"}
      flex-direction: ${direction};
      text-align: ${textAlign};
      margin-top:${marginTop};
    `;

  return (
    <Container className={`${className}`}>
      {title}
      {description}
      {props.children}
    </Container>
  );

}


