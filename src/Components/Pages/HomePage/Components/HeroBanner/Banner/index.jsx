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
      productImage_lg,
      productImage_md,
      productImage_sm,
      title,
      description,
      cta,
      reflect,
      isBannerCenter,
      darktheme,
    } = this.props;
    //Style

    return (
      <Container id={`Banner-${number}`} className="banner">
        {!isBannerCenter ? (
          <BannerTwoCol
            number={number}
            imageUrl={imageUrl}
            altProduct={altProduct}
            productImage_lg={productImage_lg}
            productImage_md={productImage_md}
            productImage_sm={productImage_sm}
            title={title}
            description={description}
            cta={cta}
            reflect={reflect}
            darktheme={darktheme}
          />
        ) : (
            <BannerCenter
              number={number}
              imageUrl={imageUrl}
              title={title}
              description={description}
              cta={cta}
              darktheme={darktheme}
            />
          )}
      </Container>
    );
  }
}

export default Banner;
