import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0 20px;
  box-shadow: 0px 2px 10px 0px gainsboro;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const LogoImage = styled.img`
  width: 200px;
`;

type LogoTextContainerProps = {
  converted?: boolean;
};

export const LogoTextContainer = styled.span<LogoTextContainerProps>`
  display: block;
  padding: 5px;
  background-color: ${(props) => (props.converted ? "#16181d" : "#fff")};
  color: ${(props) => (props.converted ? "#fff" : "#16181d")};
  font-size: 1.5rem;
  font-weight: bold;
`;

type LogoContainerProps = {
  withBorder?: boolean;
};

export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  border: ${(props) => (props.withBorder ? "1px solid #16181d" : "none")};
  width: fit-content;
  height: fit-content;

  a {
    display: flex;
    text-decoration: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    li {
      /* min-width: 75px; */
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
        }

        span {
          padding-left: 5px;
        }
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  padding-bottom: 5px;
  border-bottom: 1px solid gainsboro;
  height: fit-content;
  margin-right: 10px;
  margin-top: 10px;
  input {
    /* width: 100%; */
    border: none;
    padding-left: 5px;

    &:focus {
      outline-width: 0;
    }
  }
`;

export const ShoppingCartContainer = styled.div`
  margin-left: 10px;
  span {
    padding-left: 2px;
  }
`;
