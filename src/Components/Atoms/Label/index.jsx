import React from "react";
import "./index.scss";

export default function label(props) {
  const { color, fontSize, fontWeight, lineHeight } = props;
  const labelStyle = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
  };
  return (
    <h4 className="label" style={labelStyle}>
      {props.children}
    </h4>
  );
}
