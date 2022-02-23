import React from "react";
import "./Input.css";

export default function Input({ input, setUserInput, nextWord }) {
  function handleKeyPress(e) {
    if (e.code === "Space") {
      nextWord();
      e.preventDefault();
    }
  }

  return (
    <input
      className="input"
      value={input}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyPress={(e) => handleKeyPress(e)}
    ></input>
  );
}
