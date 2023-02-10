import "../Data components/Label.css";
export default function Label(props) {
  return (
    <div>
      <label
        className={`label-style ${!props.styleCondition ? "invalid" : "valid"}`}
      >
        <span>Course Goal</span>
        {props.children}
      </label>
    </div>
  );
}
