import "./TopButtons.scss";
import {
  RiNotification2Fill,
  RiSettings4Fill,
  RiLogoutBoxRFill,
} from "react-icons/ri";

function TopButtons() {
  return (
    <div className="top-buttons-wrapper">
      <select className="language-select">
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="de">DE</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="it">IT</option>
      </select>
      <div className="bell">
        <RiNotification2Fill />
      </div>
      <RiSettings4Fill />
      <RiLogoutBoxRFill />
    </div>
  );
}
export default TopButtons;
