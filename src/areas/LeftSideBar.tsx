import "./LeftSideBar.scss";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Profile from "../components/Profile";
import TopButtons from "../components/TopButtons";
import Card from "../components/Card";
import Balance from "../components/Balance";

function LeftSideBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div
      className={
        openSideBar ? "left-side-bar-wrapper active" : "left-side-bar-wrapper"
      }
    >
      <div className="toggle" onClick={() => setOpenSideBar(!openSideBar)}>
        <RiArrowRightSLine />
      </div>
      <TopButtons />
      <Profile />
      <Balance />
      <Card />
    </div>
  );
}
export default LeftSideBar;
