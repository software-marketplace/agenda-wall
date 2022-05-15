// react
import logo from "assets/images/logo-crop.png";

import "./Header.css";

function Header() {
  return (
    <div className="header-root flex justify-center">
      <img src={logo} alt="logo" className="w-44 md:w-42 lg:w-48" />
    </div>
  );
}

export default Header;
