import "./RecentTransactions.scss";
import { FiDownload } from "react-icons/fi";
import { transactionsData } from "../data/transactionsData";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function RecentTransactions() {
  return (
    <div className="recent-transactions-wrapper">
      <div className="recent-transactions-title">
        <h1>Recent Transactions</h1>
        <div className="recent-transactions-title-icon">
          <FiDownload />
        </div>
      </div>
      {transactionsData.map((transaction) => (
        <div key={transaction.id} className="transaction-date">
          <h2>{transaction.date}</h2>
          {transaction.transactions.map((transactionItem) => (
            <div key={transactionItem.id} className="transaction">
              {transactionItem.type === "income" ? (
                <div className="transaction-type-icon">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="transaction-type-icon outcome">
                  <AiOutlineMinus />
                </div>
              )}
              <h3>{transactionItem.title}</h3>
              <div className="value">
                <p>{transactionItem.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default RecentTransactions;
