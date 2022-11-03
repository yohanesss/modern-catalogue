import React from "react";
import promoVideo from "../../assets/shopping-banner.mp4";
import {
  HomeBannerContainer,
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
    </>
  );
};

export default HomeBanner;
