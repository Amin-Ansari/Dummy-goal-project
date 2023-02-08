import "../Data components/Label.css";
import TextInput from "./TextInput";
export default function Label(props) {
  return (
    <div>
      <label className="label-style">
        <span>Course Goal</span>
        {props.children}
      </label>
    </div>
  );
}
