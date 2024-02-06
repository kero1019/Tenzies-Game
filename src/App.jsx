import React from "react";
import Box from "./Components/Box";
import Boxes from "./Components/Boxes";

function GenerateRandomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}
export {GenerateRandomNumber}
function App() {
  // Function That Generate Random Numbers
  
  // State That Contain All my Boxes
  const [box, setBox] = React.useState(Boxes);
  const [Roll,setRoll] = React.useState(false);
  // Function That Prevent Chosen Box To Change and Change Rest of Them
  function makeChange() {
    setBox(
      box.map((data) => {
        return data.check ? data : { ...data, value: GenerateRandomNumber()};
      }),
    );
    RollOrWin() ? location.reload() : ""
  }

  // Function To Check if All Have The Same Value or Not
  function RollOrWin() {
    let checkValue = true;
    for (let i = 0; i < box.length; i++) {
      if (box[i].value !== box[0].value) {
        checkValue = false;
        break;
      }
    }
    setRoll(checkValue)
    return checkValue;
  }

  // Function That Change The Clicked Box
  function toggle(id) {
    setBox((prevState) =>
      prevState.map((data) => {
        return id === data.id ? { ...data, check: !data.check } : data;
      }),
    );
    RollOrWin();
  }
  // To Display All Boxes
  const myBoxes = box.map((data) => (
    <Box
      id={data.id}
      key ={data.id}
      check={data.check}
      value={data.value}
      toggle={() => toggle(data.id)}
    />
  ));
  return (
    <div className="container">
      <div className="small-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="boxes-container">{myBoxes}</div>
        <button onClick={makeChange}>{Roll ? "Congrats! You Won!!" : "Roll"}</button>
      </div>
    </div>
  );
}

export default App;
