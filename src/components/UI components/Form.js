import "../UI components/Form.css";
import "../Data components/FormContent";
import FormContent from "../Data components/FormContent";
import { useState } from "react";
export default function GoalWrapper(props) {
  const [content, updatecontent] = useState("");
  const [styleCondition, updateCondition] = useState(true);
  const submittingForm = (eventObject) => {
    eventObject.preventDefault();
    props.onPassingToApp(content);
    console.log(content);
    updatecontent("");
    if (content) {
      updateCondition(true);
    } else {
      updateCondition(false);
    }
  };
  const passContent = (takenContnet) => {
    updatecontent(takenContnet);
    console.log("Pass content happend");
  };
  return (
    <form className="form-style" onSubmit={submittingForm}>
      <FormContent
        onPassingData={passContent}
        onCondition={styleCondition}
        controlledValue={content}
      ></FormContent>
    </form>
  );
}
