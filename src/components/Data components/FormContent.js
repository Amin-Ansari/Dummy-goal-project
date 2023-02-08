import "./FormContent.css";
import Label from "./Label";
import TextInput from "./TextInput";
import AddButton from "./AddButton";
const FormContent = (props) => {
  return (
    <div className="form-content">
      <Label>
        <TextInput></TextInput>
      </Label>
      <AddButton />
    </div>
  );
};
export default FormContent;
