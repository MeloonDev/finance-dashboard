import "./LeftSideBar.scss";
import Profile from "../components/Profile";
import TopButtons from "../components/TopButtons";
import Card from "../components/Card";
import Balance from "../components/Balance";

function LeftSideBar() {
  return (
    <div className="left-side-bar-wrapper">
      <TopButtons />
      <Profile />
      <Balance />
      <Card />
    </div>
  );
}
export default LeftSideBar;
