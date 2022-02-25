import React from "react";
import "./Input.css";

export default function Input({ input, setUserInput, nextWord, setActiveKey }) {
  const codes = {
    Backquote: "ё",
    KeyQ: "й",
    KeyW: "ц",
    KeyE: "у",
    KeyR: "к",
    KeyT: "е",
    KeyY: "н",
    KeyU: "г",
    KeyI: "ш",
    KeyO: "щ",
    KeyP: "з",
    BracketLeft: "х",
    BracketRight: "ъ",
    KeyA: "ф",
    KeyS: "ы",
    KeyD: "в",
    KeyF: "а",
    KeyG: "п",
    KeyH: "р",
    KeyJ: "о",
    KeyK: "л",
    KeyL: "д",
    Semicolon: "ж",
    Quote: "э",
    Backslash: "\\",
    KeyZ: "я",
    KeyX: "ч",
    KeyC: "с",
    KeyV: "м",
    KeyB: "и",
    KeyN: "т",
    KeyM: "ь",
    Comma: "б",
    Period: "ю",
    Slash: ".",
  };

  function handleKeyPress(e) {
    e.preventDefault();
    let key = e.code;
    if (key === "Space") {
      nextWord();
      e.preventDefault();
    } else if (codes[key]) {
      setUserInput(input + codes[key]);
      setActiveKey(codes[key]);
    }
  }

  return (
    <input
      className="input"
      value={input}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyPress={(e) => handleKeyPress(e)}
      onKeyUp={() => setActiveKey("")}
    ></input>
  );
}
