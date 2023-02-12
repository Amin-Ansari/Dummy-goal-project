import { useState } from "react";
import styles from "./TextInput.module.css";
export default function TextInput(props) {
  const liftUpValue = (eventObject) => {
    props.onTakeValue(eventObject.target.value);
  };
  return (
    <div>
      <input
        className={styles.textinput}
        type={"text"}
        onChange={liftUpValue}
        value={props.bindedValue}
      ></input>
    </div>
  );
}
