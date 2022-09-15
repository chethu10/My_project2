import "./App.css";
import MainCard from "./Components/MainCard";
// import CardContent from "./Components/CardContent";
// import { HeadderTitle } from "./Components/HedderTitle";

const n = 3;


export default function App() {
  return [...Array(n)].map((i) => <span><MainCard/></span>);
}
  //   <div className="mainCard">
  //     <div className="card">
  //       <HeadderTitle />
  //       <div className="content">
  //         <CardContent />
  //       </div>
  //     </div>
  //     <div className="card">
  //       <HeadderTitle />
  //       <div className="content">
  //         <CardContent />
  //       </div>
  //     </div>
  //     <div className="card">
  //       <HeadderTitle />
  //       <div className="content">
  //         <CardContent />
  //       </div>
  //     </div>
  //     <div className="card">
  //       <HeadderTitle />
  //       <div className="content">
  //         <CardContent />
  //       </div>
  //     </div>  
  //     <div className="card">
  //       <HeadderTitle />
  //       <div className="content">
  //         <CardContent />
  //       </div>
  //     </div>
  //   </div>
  // );
 


// export default App;
