import "./RightSideBar.scss";
import { ReactComponent as Logo } from "../assets/logoText.svg";
import MenuIcons from "../components/MenuIcons";
import PlusButton from "../components/PlusButton";

function RightSideBar() {
  return (
    <nav>
      <Logo />
      <MenuIcons />
      <PlusButton />
    </nav>
  );
}
export default RightSideBar;
