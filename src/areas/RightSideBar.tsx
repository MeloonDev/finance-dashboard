import "./RightSideBar.scss";
import MenuIcons from "../components/MenuIcons";
import PlusButton from "../components/PlusButton";

function RightSideBar() {
  return (
    <nav>
      <div className="logo" />
      <MenuIcons />
      <PlusButton />
    </nav>
  );
}
export default RightSideBar;
