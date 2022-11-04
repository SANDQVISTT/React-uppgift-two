import Li from "./item";

const Display = (props) => {
  return (
    <div className="Cards">
      {props.list.map((value, index) => {
        return <Li key={index} value={value}></Li>;
      })}
    </div>
  );
};

export default Display;
