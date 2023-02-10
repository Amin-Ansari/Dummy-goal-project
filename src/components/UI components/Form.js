import "../UI components/Form.css";
import "../Data components/FormContent";
import FormContent from "../Data components/FormContent";
import { useState } from "react";
export default function GoalWrapper(props) {
  const [content, updatecontent] = useState("");
  const [styleCondition, updateCondition] = useState(true);
  const passContent = (takenContnet) => {
    updatecontent(takenContnet);
  };
  const submittingForm = (eventObject) => {
    eventObject.preventDefault();
    if (document.querySelector("input").value) {
      props.onPassingToApp(content);
      document.querySelector("input").value = "";
      updatecontent("");
      updateCondition(true);
    } else {
      updateCondition(false);
    }
  };

  return (
    <form className="form-style" onSubmit={submittingForm}>
      <FormContent
        onPassingData={passContent}
        onCondition={styleCondition}
      ></FormContent>
    </form>
  );
}
