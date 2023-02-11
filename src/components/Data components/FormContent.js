import "./FormContent.css";
import Label from "./Label";
import TextInput from "./TextInput";
import AddButton from "./AddButton";
import { useState } from "react";
const FormContent = (props) => {
  const [value, updateValue] = useState("");
  const whenYouType = function (event) {
    if (event.key != "Enter") {
      props.onPassingData(value);
    }
  };
  const takeDataFromInput = (takenValue) => {
    updateValue(takenValue);
  };
  return (
    <div className="form-content" onKeyUp={whenYouType}>
      <Label styleCondition={props.onCondition}>
        <TextInput
          onTakeValue={takeDataFromInput}
          styleCondition={props.onCondition}
          bindedValue={props.controlledValue}
        ></TextInput>
      </Label>
      <AddButton>Add goal</AddButton>
    </div>
  );
};
export default FormContent;
