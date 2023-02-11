import { useState } from "react";
import "./TextInput.css";
export default function TextInput(props) {
  const liftUpValue = (eventObject) => {
    props.onTakeValue(eventObject.target.value);
  };
  return (
    <div>
      <input
        className={`text-input`}
        type={"text"}
        onChange={liftUpValue}
        value={props.bindedValue}
      ></input>
    </div>
  );
}
