import { render } from "react-dom";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var currentScore = 8;

  const [textColor, setTextColor] = useState("red");
  const [health, sethealth] = useState("");
  const [sugg1, setsugg1] = useState("");
  const [sugg2, setsugg2] = useState("");
  const [sugg3, setsugg3] = useState("");
  const [sugg4, setsugg4] = useState("");

  function checkNumberOfChar(string) {
    for (var i = 0; i < string.length; i++) {}
  }

  function checkUpperLowerChar(string) {
    for (var i = 0; i < string.length; i++) {}
  }

  function checkNumericChar(string) {
    for (var i = 0; i < string.length; i++) {}
  }

  function checkSpecialChar(string) {
    for (var i = 0; i < string.length; i++) {}
  }

  function passwordInputHandler(passwordInput) {
    var userInputString = passwordInput.target.value;
    checkNumberOfChar(userInputString);
    checkUpperLowerChar(userInputString);
    checkNumericChar(userInputString);
    checkSpecialChar(userInputString);

    if (currentScore >= 6) {
      setTextColor("green");
      sethealth("Excellent");
    } else if (currentScore < 6 && currentScore >= 2) {
      setTextColor("orange");
      sethealth("Good");
    } else {
      setTextColor("red");
      sethealth("Bad");
    }
  }

  return (
    <div className="App">
      <h1>Password Health Checker</h1>
      <p className="label">Check if your password is safe or not!</p>
      <div className="input-area">
        <input
          className="input-box"
          type="password"
          onChange={passwordInputHandler}
        ></input>
      </div>
      <div className="output">
        <p>
          Password Health: <span style={{ color: textColor }}>{health}</span>
        </p>
        <h4>Suggestion</h4>
        <p>{sugg1}</p>
        <p>{sugg2}</p>
        <p>{sugg3}</p>
        <p>{sugg4}</p>
      </div>
    </div>
  );
}
