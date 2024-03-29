import "./App.css";
import { useState } from "react";
import GoalWrapper from "./components/GoalWrapper";
import Form from "./components/UI components/Form";
import GoalList from "./components/UI components/GoalList";

function App() {
  const [itemArray, updateArray] = useState([
    "Watch all videos",
    "Take notes",
    "Do all the excersices",
    "Finish the course",
  ]);
  const removeTheTaks = (indexKey) => {
    updateArray((prevValues) => {
      const leftVal = [...prevValues];
      leftVal.splice(indexKey, 1);
      return leftVal;
    });
  };
  const passToApp = (passedFromForm) => {
    updateArray((prevValues) => {
      let prevItems = [...prevValues];
      prevItems.unshift(passedFromForm);
      return [...prevItems];
    });
  };
  return (
    <div className="App">
      <GoalWrapper>
        <Form onPassingToApp={passToApp}></Form>
        <GoalList items={itemArray} onRemoving={removeTheTaks}></GoalList>
      </GoalWrapper>
    </div>
  );
}

export default App;
