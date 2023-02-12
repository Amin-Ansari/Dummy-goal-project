import { useState } from "react";
import styles from "./TextInput.module.css";
export default function TextInput(props) {
  const liftUpValue = (eventObject) => {
    props.onTakeValue(eventObject.target.value);
  };
  return (
    <div>
      <input
        type={"text"}
        className={styles.textinput}
        onChange={liftUpValue}
        value={props.bindedValue}
      ></input>
    </div>
  );
}
