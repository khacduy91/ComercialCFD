import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./index.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Container from "../Container";

class ServiceCard extends React.Component {
  render() {
    const { title, description } = this.props;
    return (
      <Container width="100%" height="100%">
        <Card className="serviceCard" hoverable>
          <Meta
            avatar={
              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
                className="serviceCard-Avatar"
              />
            }
            className="serviceCard-Meta"
            title={<p className="serviceCard-Title">{title}</p>}
            description={
              <p className="serviceCard-Description">{description}</p>
            }
          />
        </Card>
      </Container>
    );
  }
}

export default ServiceCard;
