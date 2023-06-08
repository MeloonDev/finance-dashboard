import "./Card.scss";
import { RiStarFill, RiVisaLine } from "react-icons/ri";

function Card() {
  return (
    <div className="card-wrapper">
      <div className="circles" />
      <div className="card-status">
        <RiStarFill />
        <h3>Platinum</h3>
        <div className="debit">
          <h3>Debit</h3>
        </div>
      </div>
      <h2 className="card-number">4572 0931 45** 37**</h2>
      <div className="card-info">
        <div className="info">
          <p className="gray">Expiry date</p>
          <p>06/25</p>
        </div>
        <div className="info">
          <p className="gray">CVV</p>
          <p>899</p>
        </div>
        <div className="visa">
          <RiVisaLine />
        </div>
      </div>
    </div>
  );
}
export default Card;
