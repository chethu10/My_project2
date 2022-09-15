import CardAline from "./CardAline";

function CardContent() {
  const Content = [
    { country: "China", number: "13K", percentage: "61.18", color: "blue"},
    { country: "International", number: "11K", percentage: "50.28", color:"orange" },
    { country: "Europe", number: "1.5K", percentage: "30.66", color: "green" },
    { country: "North America", number: "1.5K", percentage: "80.66",color: "purple" },
  ];

  return (
    <div>
      {Content.map((item) => (
        <CardAline
          country={item.country}
          number={item.number}
          percentage={item.percentage}
          color = { item.color}
        />
      ))}
    </div>
  );
}
export default CardContent;
