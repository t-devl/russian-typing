import React from "react";
import Letter from "../Letter/Letter";
import "./Word.css";

export default function Word({ value, userInput, isWordCompleted, isActive }) {
  return (
    <div className={`word ${isActive ? "word--active" : ""}`}>
      {value.split("").map((letter, index) => (
        <Letter
          key={index}
          value={letter}
          isLetterCompleted={
            (userInput.length > index && isActive) || isWordCompleted
          }
          isCorrect={letter === userInput[index] || isWordCompleted}
        ></Letter>
      ))}
    </div>
  );
}
