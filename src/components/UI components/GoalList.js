import "./GoalList.css";

export default function GoalList(props) {
  function passingTheKey(event) {
    props.items.forEach((item, index) => {
      if (item == event.target.innerHTML) {
        props.onRemoving(index);
      }
    });
  }
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li className="li-style" key={index} onClick={passingTheKey}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
