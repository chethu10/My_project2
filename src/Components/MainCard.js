import "./MainCard.css";
import CardContent from "./CardContent";
import  HeadderTitle from "./HedderTitle";

function MainCard() {
  return (
    <div className="mainCard">
      <div className="card">
        <HeadderTitle />
        <div className="content">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
