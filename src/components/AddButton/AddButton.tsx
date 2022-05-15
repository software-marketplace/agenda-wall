// images
import addIcon from "assets/images/add.png";

interface Props {
  onClick: () => void;
}

function Sidebar(props: Props) {
  return (
    <button
      className="rounded-full z-50 m-8 p-4 bg-blue-600 hover:bg-blue-700 absolute bottom-0"
      onClick={props.onClick}
    >
      <img src={addIcon} alt="addIcon" />
    </button>
  );
}

export default Sidebar;
