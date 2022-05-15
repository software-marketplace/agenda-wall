// react
import * as React from "react";

// components
import Base from "components/Base/Base";

// images
import logoIcon from "assets/images/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/wall">
      <Base>
        <div className="flex justify-center items-center h-full">
          {/* Image */}
          <div className="w-96">
            <img src={logoIcon} alt="logo" className="w-full" />
          </div>
        </div>
      </Base>
    </Link>
  );
}

export default Home;
