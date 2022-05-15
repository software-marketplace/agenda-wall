import Draggable from "react-draggable";

// images
import thumbtackIcon from "assets/images/thumbtack.png";

export interface CardInterface {
  key?: string;
  priority: number;
  title: String;
  x: number;
  y: number;
  onStop: (x: number, y: number) => void;
}

function Card(props: CardInterface) {
  return (
    <Draggable bounds="parent">
      <div className="text-center max-w-sm bg-gray-500 shadow-lg rounded-lg cursor-move	">
        {/* Thumbtack Image */}
        <div className="relative">
          <img
            draggable={false}
            className="absolute -top-6 -right-6 w-12"
            src={thumbtackIcon}
            alt="thumbtack"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold italic p-4 text-white">
          {props.title}
        </h3>
      </div>
    </Draggable>
  );
}

export default Card;
