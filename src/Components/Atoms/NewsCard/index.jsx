import React from "react";
import "./index.scss";
import Container from "../Container";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

class NewsCard extends React.Component {
  render() {
    const {
      imageUrl,
      imageAlt,
      headline,
      author,
      postDay,
      content,
    } = this.props;
    return (
      <Container width="100%" className="newsCard">
        <Row justify="center">
          <Col span="24" className="newsCard-Col">
            <Link to="/">
              <img src={imageUrl} alt={imageAlt} className="newsCard-image" />
            </Link>
            <Container width="90%" className="newsCard-Container">
              <Link>
                <h3 className="newsCard-Headline">{headline}</h3>
              </Link>
              <p className="newsCard-Meta">
                BY <span>{author}</span> | {postDay}
              </p>
              <p className="newsCard-Content">{content}</p>
              <Button className="newsCard-Button" type="primary">
                read more
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsCard;
