import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #16181d;
  color: white;
  margin-top: 50px;
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const FooterInnerContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterColumnDivider = styled.div`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FooterHeading = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const FooterItem = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterSocialMediaContainer = styled.div`
  display: flex;
  svg {
    color: white;
    width: 20px;
    margin-right: 5px;
  }
`;

export const CopyrightNotice = styled.p`
  font-size: 0.8rem;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 10px;
`;
