import styled from "styled-components";

export const HomeBannerContainer = styled.div`
  position: relative;
  max-height: 500px;
  background-color: #16181d;
`;

export const PromoVideoPlayerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const PromoVideoPlayer = styled.video`
  max-height: 500px;
  height: 100%;
  width: 100%;
`;
