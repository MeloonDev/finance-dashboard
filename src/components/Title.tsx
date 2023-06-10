import "./Title.scss";
import { RiSearchLine } from "react-icons/ri";

function Title() {
  return (
    <div className="title-wrapper">
      <h1>Dashboard</h1>
      <div className="search-bar">
        <RiSearchLine />
        <input type="text" placeholder="Search Dashboard..." />
      </div>
    </div>
  );
}
export default Title;
