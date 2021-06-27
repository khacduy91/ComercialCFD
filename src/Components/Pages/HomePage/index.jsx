import React from "react";
import Container from "../../Atoms/Container";
import DealOfDay from "./Components/DealOfDay";
import HeroBanner from "./Components/HeroBanner";
import LatestNews from "./Components/LatestNews";
import SectionMenWomen from "./Components/SectionMenWomen";
import Service from "../../Atoms/Service";
import TrendingProduct from "./Components/TrendingProduct";

import "./index.scss";

class HomePage extends React.Component {
  render() {
    return (
      <Container width="100%" className="HomePage">
        <HeroBanner />
        <SectionMenWomen />
        <Service />
        {/* <DealOfDay /> */}
        <TrendingProduct />
        <LatestNews />
      </Container>
    );
  }
}

export default HomePage;
