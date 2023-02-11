import "../UI components/Form.css";
import "../Data components/FormContent";
import FormContent from "../Data components/FormContent";
import { useState } from "react";
export default function GoalWrapper(props) {
  const [content, updatecontent] = useState("");
  const submittingForm = (eventObject) => {
    eventObject.preventDefault();
    if (content) {
      props.onPassingToApp(content);
      updatecontent("");
    } else {
    }
  };
  const passContent = (takenContnet) => {
    updatecontent(takenContnet);
  };
  return (
    <form className="form-style" onSubmit={submittingForm}>
      <FormContent
        onPassingData={passContent}
        controlledValue={content}
      ></FormContent>
    </form>
  );
}
