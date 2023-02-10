import "../Data components/Label.css";
export default function Label(props) {
  console.log(props);
  return (
    <div>
      <label className="label-style">
        <span
          style={{
            color: !props.styleCondition ? "red" : "black",
          }}
        >
          Course Goal
        </span>
        {props.children}
      </label>
    </div>
  );
}
