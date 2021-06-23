import { Col } from "antd";
import React from "react";
import "./index.scss";

export default function InputGroup({
  error,
  placeholder,
  label,
  xl = 24,
  md = 24,
  sm = 24,
  xs = 24,
  inputChange,
  type,
  isLabel = true,
  name,
  className,
  required = false,
}) {
  return (
    <Col
      className="inputGroup"
      xl={{ span: `${xl}` }}
      md={{ span: `${md}` }}
      sm={{ span: `${sm}` }}
      xs={{ span: `${xs}` }}
    >
      <label
        style={{ display: `${isLabel ? "flex" : "none"}` }}
        className={`inputGroup-label ${className}`}
      >
        {label ? label : placeholder} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`inputGroup-input ${className}`}
        onChange={inputChange}
        name={name}
        required={required}
      />
      {error[`${name}`] && (
        <p className="inputGroup-error">{error[`${name}`]}</p>
      )}
    </Col>
  );
}
