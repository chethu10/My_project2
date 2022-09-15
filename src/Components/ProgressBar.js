import { Line } from 'rc-progress';
function ProgressBar (props){
  return(
  <div>
     <Line percent={props.value}  strokeColor={props.color} />
     
  </div>
);
}
export default ProgressBar;