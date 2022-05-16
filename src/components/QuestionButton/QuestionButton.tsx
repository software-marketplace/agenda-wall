// react
import { useState } from "react";

// images
import solidButton from "assets/images/solid-question-button.png";
import outlineButton from "assets/images/outline-question-button.png";

// custom css
import "./QuestionButton.css";

function QuestionButton() {
  const [isSolid, setIsSolid] = useState(false);

  return (
    <div id="question-button-root" className="relative w-full">
      <div className="absolute z-50 right-0 p-4">
        <a
          href="https://github.com/KryptoBlack/agenda-wall"
          className="w-6 h-6"
          onMouseOver={() => setIsSolid(!isSolid)}
          onMouseOut={() => setIsSolid(!isSolid)}
        >
          <img
            src={isSolid ? solidButton : outlineButton}
            alt="solid-question-button"
            className="w-6 h-6 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default QuestionButton;
