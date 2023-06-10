import CardsList from "../components/CardsList";
import RecentTransactions from "../components/RecentTransactions";
import Title from "../components/Title";
import "./Contents.scss";

function Contents() {
  return (
    <div className="contents-wrapper">
      <Title />
      <CardsList />
      <RecentTransactions />
    </div>
  );
}
export default Contents;
