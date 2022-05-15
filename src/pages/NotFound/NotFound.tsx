// components
import Base from "components/Base/Base";

// react-router-dom
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Base>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col	items-center">
          {/* Text */}
          <h1 className="text-white text-3xl italic font-semibold p-6">
            Page Not Found!
          </h1>

          {/* Button */}
          <div>
            <Link to="/">
              <button className="text-white font-semibold rounded-full bg-blue-600 hover:bg-blue-700 p-4">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default NotFound;
