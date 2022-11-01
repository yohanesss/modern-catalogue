import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = false;

  return (
    <>
      <header>
        <div className="logo-container">
          <div>
            <span>Modern</span>
            <span>Catalogue</span>
          </div>
        </div>
        <div className="category-dropdown">Category!</div>
        <div className="search-container"></div>
        <div className="navigation-container">
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
          <div className="shopping-cart-icon">
            <h3>Cart</h3>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
