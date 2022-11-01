import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 10px;
  box-shadow: 0px 2px 10px 0px gainsboro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;
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
`;

export const LogoContainer = styled.div`
  display: flex;
  border: 1px solid #16181d;
  width: fit-content;
  height: fit-content;

  a {
    display: flex;
    text-decoration: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    li {
      min-width: 75px;
      padding-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderFeatureContainer = styled.div`
  display: flex;
  padding: 0 5px;
  width: 100%;
`;

export const CategoryDropdownContainer = styled.div`
  flex: 2;
  max-width: 80px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  input {
    width: 100%;
  }
`;

export const ShoppingCartContainer = styled.div`
  padding-right: 5px;
`;
