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

export const HomeMotto = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin: 30px auto;
  width: fit-content;
  padding: 5px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  border-bottom: 4px solid #e50010;
`;
