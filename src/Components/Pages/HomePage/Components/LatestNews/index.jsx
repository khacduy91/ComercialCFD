import React from "react";
import "./index.scss";
import Container from "../../../../Atoms/Container";
import TitleSection from "../../../../Atoms/TitleSection";
import { Col, Row } from "antd";
import NewsCard from "../../../../Atoms/NewsCard";
import { imgUrl } from "../../../../../api/config";
class LatestNews extends React.Component {
  render() {
    return (
      <Container width="100%" className="latestNews" maxWidth="1140px">
        <TitleSection
          align="left"
          title="Latest News"
          description="Fashion Trends We’re Looking Forward"
        />
        <Container width="100%">
          <Row justify="center" align="top" gutter="24">
            <Col
              lg={{ span: 8 }}
              md={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
            >
              <NewsCard
                imageUrl={`${imgUrl}Image/News/News1.jpg`}
                imageAlt="Post1"
                headline="An Inside Look at Paris Fashion Week"
                author="DODGERFAN"
                postDay="OCT 29, 2017"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sollicitudin egestas. Ut lobortis eros vitae mauris cursus, vel faucibus turpis..."
              />
            </Col>
            <Col
              lg={{ span: 8 }}
              md={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
            >
              <NewsCard
                imageUrl={`${imgUrl}Image/News/News1.jpg`}
                imageAlt="Post1"
                headline="An Inside Look at Paris Fashion Week"
                author="DODGERFAN"
                postDay="OCT 29, 2017"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sollicitudin egestas. Ut lobortis eros vitae mauris cursus, vel faucibus turpis..."
              />
            </Col>
            <Col
              lg={{ span: 8 }}
              md={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
            >
              <NewsCard
                imageUrl={`${imgUrl}Image/News/News1.jpg`}
                imageAlt="Post1"
                headline="An Inside Look at Paris Fashion Week"
                author="DODGERFAN"
                postDay="OCT 29, 2017"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sollicitudin egestas. Ut lobortis eros vitae mauris cursus, vel faucibus turpis..."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default LatestNews;
