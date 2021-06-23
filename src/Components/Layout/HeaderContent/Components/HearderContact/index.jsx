import { Button } from "antd";
import { GooglePlusOutlined, TwitterOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import React from "react";
import "./index.scss";
import Container from "../../../../Atoms/Container";

class HearderContact extends React.Component {
  render() {
    const { phone } = this.props;

    //Style
    const buttonStyle = {
      marginLeft: "7px",
      height: "35px",
      width: "35px",
      padding: 0,
    };

    return (
      <Container className="headerContact">
        <div>
          <span className="headerContact-span">CALL US:</span>
          <a href={`tel:${phone}`} className="headerContact-a">
            {phone}
          </a>
        </div>
        <ButtonGroup size="large">
          <Button
            value="facebook"
            style={buttonStyle}
            className="headerContact-button"
          >
            <strong>f</strong>
          </Button>
          <Button
            value="twitter"
            style={buttonStyle}
            className="headerContact-button"
            icon={<TwitterOutlined />}
          />
          <Button
            value="google"
            style={buttonStyle}
            className="headerContact-button"
            icon={<GooglePlusOutlined />}
          />
        </ButtonGroup>
      </Container>
    );
  }
}

export default HearderContact;
