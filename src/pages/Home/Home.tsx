// components
import Base from "components/Base/Base";

// images
import logoIcon from "assets/images/logo-text-cropped.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Base>
      <div className="flex justify-center items-center h-full">
        {/* Image */}
        <div
          className="hover:animate-ping"
          onMouseOver={() => {
            setTimeout(() => {
              navigate("/wall");
            }, 100);
          }}
        >
          <img src={logoIcon} alt="logo" className="w-full" />
        </div>
      </div>
    </Base>
  );
}

export default Home;
