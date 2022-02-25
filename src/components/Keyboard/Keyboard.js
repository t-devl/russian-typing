import React from "react";
import Key from "../Key/Key";
import "./Keyboard.css";

export default function Keyboard({ activeKey }) {
  const letters = [
    ["ё"],
    ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
    ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
    ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
  ];

  const altKeys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    [],
    ["\\"],
    ["."],
  ];

  return (
    <div className="keyboard">
      <div className="row row--first">
        {letters[0].map((letter) => (
          <Key
            key={letter}
            isLetter={true}
            value={letter}
            isActive={activeKey === letter}
          ></Key>
        ))}
        {altKeys[0].map((key) => (
          <Key key={key} isLetter={false} value={key}></Key>
        ))}
      </div>
      <div className="row row--second">
        {letters[1].map((letter) => (
          <Key
            key={letter}
            isLetter={true}
            value={letter}
            isActive={activeKey === letter}
          ></Key>
        ))}
        {altKeys[1].map((key) => (
          <Key key={key} isLetter={false} value={key}></Key>
        ))}
      </div>
      <div className="row row--third">
        {letters[2].map((letter) => (
          <Key
            key={letter}
            isLetter={true}
            value={letter}
            isActive={activeKey === letter}
          ></Key>
        ))}
        {altKeys[2].map((key) => (
          <Key key={key} isLetter={false} value={key}></Key>
        ))}
      </div>
      <div className="row row--fourth">
        {letters[3].map((letter) => (
          <Key
            key={letter}
            isLetter={true}
            value={letter}
            isActive={activeKey === letter}
          ></Key>
        ))}
        {altKeys[3].map((key) => (
          <Key key={key} isLetter={false} value={key}></Key>
        ))}
      </div>
    </div>
  );
}
