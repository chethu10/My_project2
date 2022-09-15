
import "./CardAline.css";
import ProgressBar from "./ProgressBar";

function CardAline(props) {
  return (
    <div>
      <div className="aline">
        <div>{props.country}</div>
        <div>{props.number}</div>
        <div>{`${props.percentage} %`}</div>
      </div>
      <div>
        <div>
          <ProgressBar value={props.percentage}
          color={props.color}/>
        </div>
      </div>
    </div>
  );
}
export default CardAline;
