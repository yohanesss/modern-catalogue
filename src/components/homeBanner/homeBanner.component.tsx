import React from "react";
import promoVideo from "../../assets/shopping-banner.mp4";
import {
  HomeBannerContainer,
  HomeMotto,
  PromoVideoPlayer,
  PromoVideoPlayerOverlay,
} from "./homeBanner.styles";

const HomeBanner = () => {
  return (
    <>
      <HomeBannerContainer>
        <PromoVideoPlayerOverlay />
        <PromoVideoPlayer autoPlay loop muted id="video">
          <source src={promoVideo} type="video/mp4" />
        </PromoVideoPlayer>
      </HomeBannerContainer>
      <HomeMotto>Shop with Confidence</HomeMotto>
    </>
  );
};

export default HomeBanner;
