import "./CardsList.scss";
import { CgMoreVerticalAlt } from "react-icons/cg";

function CardsList() {
  return (
    <div className="cards-list-wrapper">
      <div className="card">
        <div className="card-desc">
          <h1>39.7 k</h1>
          <h2>Revenue this Month</h2>
        </div>
        <div className="card-icon">
          <CgMoreVerticalAlt />
        </div>
      </div>
      <div className="card">
        <div className="card-desc">
          <h1>6.3 k</h1>
          <h2>Projects income</h2>
        </div>
        <div className="card-icon">
          <CgMoreVerticalAlt />
        </div>
      </div>
      <div className="card">
        <div className="card-desc">
          <h1>56.9 k</h1>
          <h2>Quoted this Month</h2>
        </div>
        <div className="card-icon">
          <CgMoreVerticalAlt />
        </div>
      </div>
      <div className="card">
        <div className="card-desc">
          <h1>2107</h1>
          <h2>Outstanding invoices</h2>
        </div>
        <div className="card-icon">
          <CgMoreVerticalAlt />
        </div>
      </div>
    </div>
  );
}
export default CardsList;
