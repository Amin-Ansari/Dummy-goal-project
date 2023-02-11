import "./FormContent.css";
import Label from "./Label";
import TextInput from "./TextInput";
import AddButton from "./AddButton";
import { useState } from "react";
const FormContent = (props) => {
  const takeDataFromInput = (takenValue) => {
    props.onPassingData(takenValue);
  };
  return (
    <div className="form-content">
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
