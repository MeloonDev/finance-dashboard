import "./Balance.scss";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

function Balance() {
  return (
    <div className="balance-wrapper">
      <div className="balance">
        <h1>Your balance: 17 391 EUR</h1>
      </div>
      <div className="balance-graph"></div>
      <div className="balance-info">
        <div className="spendings">
          <div className="icon">
            <HiArrowTrendingDown />
          </div>
          <div className="info">
            <h3>Spendings</h3>
            <h2>2143</h2>
          </div>
        </div>
        <div className="earnings">
          <div className="icon">
            <HiArrowTrendingUp />
          </div>
          <div className="info">
            <h3>Earnings</h3>
            <h2>3127</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Balance;
