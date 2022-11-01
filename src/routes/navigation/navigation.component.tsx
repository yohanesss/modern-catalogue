import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  CategoryDropdownContainer,
  HeaderContainer,
  HeaderFeatureContainer,
  LogoContainer,
  LogoTextContainer,
  NavigationContainer,
  SearchContainer,
  ShoppingCartContainer,
} from "./navigation.styles";

const Navigation = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = false;

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <LogoTextContainer>Modern</LogoTextContainer>
            <LogoTextContainer converted>Catalogue</LogoTextContainer>
          </Link>
        </LogoContainer>
        <HeaderFeatureContainer>
          <CategoryDropdownContainer>Category!</CategoryDropdownContainer>
          <SearchContainer>
            <input type="search" placeholder="Search Product..." />
          </SearchContainer>
        </HeaderFeatureContainer>
        <NavigationContainer>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              {loggedIn ? (
                <span>User</span>
              ) : (
                <Link to="/authentication">Log In</Link>
              )}
            </li>
          </ul>
          <ShoppingCartContainer>
            <h3>Cart</h3>
          </ShoppingCartContainer>
        </NavigationContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
