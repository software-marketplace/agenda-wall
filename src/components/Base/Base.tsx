// react
import * as React from "react";

// custom css
import "./Base.css";

interface Props {
  children: React.ReactNode;
  rest?: any;
}

// components
const Footer = React.lazy(() => import("components/Footer/Footer"));

function Base(props: Props) {
  const renderFooter = () => (
    <React.Fragment>
      <Footer />
    </React.Fragment>
  );

  return (
    <div
      id="base-root"
      className="relative bg-gray-900 h-screen"
      {...props.rest}
    >
      <div id="main-container" className="h-screen w-screen">
        {props.children}
      </div>
      {renderFooter()}
    </div>
  );
}

export default Base;
