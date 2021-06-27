import React from "react";
import BannerCenter from "../BannerCenter";
import BannerTwoCol from "../BannerTwoCol";
import Container from "../../../../../Atoms/Container";
import "./index.scss";

class Banner extends React.Component {
  render(props) {
    const {
      number,
      imageUrl,
      altProduct,
      title,
      description,
      cta,
      reflect,
      isBannerCenter,
      darktheme,
      link,
    } = this.props;
    //Style

    return (
      <Container id={`Banner-${number}`} className="banner">
        {!isBannerCenter ? (
          <BannerTwoCol
            number={number}
            imageUrl={imageUrl}
            altProduct={altProduct}
            title={title}
            description={description}
            cta={cta}
            reflect={reflect}
            darktheme={darktheme}
            link={link}
          />
        ) : (
          <BannerCenter
            number={number}
            imageUrl={imageUrl}
            title={title}
            description={description}
            cta={cta}
            darktheme={darktheme}
            link={link}
          />
        )}
      </Container>
    );
  }
}

export default Banner;
