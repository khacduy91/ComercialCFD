import { Divider } from "antd";
import React from "react";
import Container from "../Container";
import "./index.scss";

class TitleSection extends React.Component {
  render() {
    const { title, description, align } = this.props;
    //Style

    return (
      <Container width="100%" className="titleSection">
        <Divider orientation={align} className="titleSection-Divider">
          {title}
        </Divider>
        <p
          className={`titleSection-Description ${align === "center" && "titleSection-Description-center"
            }`}
        >
          {description}
        </p>
      </Container>
    );
  }
}

export default TitleSection;
