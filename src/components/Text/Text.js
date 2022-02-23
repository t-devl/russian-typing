import React from "react";
import Word from "../Word/Word";
import "./Text.css";

export default function Text({ words, userInput, currentWordIndex }) {
  return (
    <div className="text">
      {words.map((word, index) => (
        <Word
          key={index}
          value={word}
          userInput={userInput}
          isWordCompleted={currentWordIndex > index}
          isActive={index === currentWordIndex}
        ></Word>
      ))}
    </div>
  );
}
