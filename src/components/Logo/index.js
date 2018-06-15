import React from "react";
import logo from "../../images/design/logo-light_2.png";

export default function Logo() {
  return (
    <a id="logo" href="/" title="Home" rel="home">
      <img src={logo} alt="Home" />
    </a>
  );
}
