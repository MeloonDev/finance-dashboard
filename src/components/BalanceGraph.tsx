import "./BalanceGraph.scss";
import { Balance } from "../data/balanceData";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type BalanceGraphProps = {
  balanceData: Balance[];
  activeBalanceItem: number;
  setActiveBalanceItem: (id: number) => void;
};

function BalanceGraph({
  balanceData,
  activeBalanceItem,
  setActiveBalanceItem,
}: BalanceGraphProps) {
  return (
    <div className="balance-graph-wrapper">
      <h3>From 3 to 8 June</h3>
      <div className="balance-graph">
        {balanceData.map((item) => (
          <div
            className={
              activeBalanceItem === item.id
                ? "balance-graph-item active"
                : "balance-graph-item"
            }
            key={item.id}
            onClick={() => {
              setActiveBalanceItem(item.id);
            }}
          >
            <div
              className="balance-graph-bar"
              style={{
                height: `${(item.value.income / 3000) * 5}rem`,
              }}
            ></div>
            <p>{monthNames[item.date.getMonth() - 1]}</p>
            <p>{`${item.date.getDate()}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BalanceGraph;
