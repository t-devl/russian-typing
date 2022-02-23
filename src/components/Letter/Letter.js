import React from "react";
import "./Letter.css";

export default function Letter({ value, isLetterCompleted, isCorrect }) {
  return (
    <span
      className={`letter ${
        isLetterCompleted ? (isCorrect ? "correct" : "incorrect") : ""
      }`}
    >
      {value}
    </span>
  );
}
