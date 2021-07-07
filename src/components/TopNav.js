import React from "react";

const TopNav = () => {
  return (
    <header className="row">
      <div>
        <a className="brand" href="/index">
          IndiaCart
        </a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
  );
};

export default TopNav;
