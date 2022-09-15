import FullScreenIcon from "./FullScreenIcon";
import HelpIcon from "./HelpIcon";
import Title from "./Title";
import './HedderTitle.css'

function  HeadderTitle(){
    return(
        <div className="hedder">
        <div className="title"><Title/></div>
        <div className="HelpIcon"><HelpIcon/></div>
        <div className="FullScreenIcon"><FullScreenIcon/></div>
        </div>
        
    );
}
export default HeadderTitle;


