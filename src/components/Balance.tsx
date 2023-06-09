import "./Balance.scss";
import { useState } from "react";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import BalanceGraph from "./BalanceGraph";
import { balanceData } from "../data/balanceData";

function Balance() {
  const [activeBalanceItem, setActiveBalanceItem] = useState(
    balanceData[balanceData.length - 1].id
  );

  const setActiveItem = (id: number) => {
    setActiveBalanceItem(id);
  };

  return (
    <div className="balance-wrapper">
      <div className="balance">
        <h1>Your balance: 17 391 EUR</h1>
      </div>
      <BalanceGraph
        activeBalanceItem={activeBalanceItem}
        setActiveBalanceItem={setActiveItem}
        balanceData={balanceData}
      />
      <div className="balance-info">
        <div className="spendings">
          <div className="icon">
            <HiArrowTrendingDown />
          </div>
          <div className="info">
            <h3>Spendings</h3>
            <h2>{balanceData[activeBalanceItem].value.outcome}</h2>
          </div>
        </div>
        <div className="earnings">
          <div className="icon">
            <HiArrowTrendingUp />
          </div>
          <div className="info">
            <h3>Earnings</h3>
            <h2>{balanceData[activeBalanceItem].value.income}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Balance;
