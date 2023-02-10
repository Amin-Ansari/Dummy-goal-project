import "./AddButton.css";
import styled from "styled-components";

const AddButton = styled.button`
  background-color: #891154;
  color: #fff;
  padding: 12px 25px;
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 10px 0px;
  @media all and (max-width: 576px) {
    width: 100%;
  }
  @media all and (min-width: 768px) {
    width: auto;
  }
`;

// () => {
//   return (
//     <div>
//       <button className="add-button">Add Goal</button>
//     </div>
//   );
// };

export default AddButton;
