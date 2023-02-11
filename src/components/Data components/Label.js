import styled from "styled-components";
import "../Data components/Label.css";
const Label = styled.label`
  & {
    display: flex;
    flex-flow: column wrap;
  }
  & > span {
    font-weight: 700;
    font-size: calc(1.1rem + 0.4vw);
    color: ${(props) => {
      if (props.styleCondition == "notEmpty") {
        return "blue";
      } else if (props.styleCondition == "empty") {
        return "red";
      } else {
        return "#000";
      }
    }};
  }
  & > span,
  & input {
    margin: 10px 0px;
  }
`;
export default Label;
