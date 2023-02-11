import "./FormContent.css";
import Label from "./Label";
import TextInput from "./TextInput";
import AddButton from "./AddButton";
import { useState } from "react";
const FormContent = (props) => {
  const [styleValue, updateStyleVal] = useState("");
  const [condition, updateCondition] = useState("");
  const takeDataFromInput = (takenValue) => {
    props.onPassingData(takenValue);
    updateStyleVal(takenValue);
  };
  function checkWhenFocused() {
    if (styleValue) {
      updateCondition("notEmpty");
    } else {
      updateCondition("empty");
    }
  }
  function resetOnBlur() {
    updateCondition("reset");
  }
  return (
    <div className="form-content">
      <Label
        styleCondition={condition}
        onFocus={checkWhenFocused}
        onKeyUp={checkWhenFocused}
        onBlur={resetOnBlur}
      >
        <span>Course Goal</span>
        <TextInput
          onTakeValue={takeDataFromInput}
          styleCondition={condition}
          bindedValue={props.controlledValue}
        ></TextInput>
      </Label>
      <AddButton>Add goal</AddButton>
    </div>
  );
};
export default FormContent;
