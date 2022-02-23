import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";

const words = [
  "и",
  "в",
  "не",
  "он",
  "на",
  "я",
  "что",
  "тот",
  "быть",
  "с",
  "а",
  "весь",
  "это",
  "как",
  "она",
  "по",
  "но",
  "они",
  "к",
  "у",
  "ты",
  "из",
  "мы",
  "за",
  "вы",
  "так",
  "же",
  "от",
  "сказать",
  "этот",
  "который",
  "мочь",
  "человек",
  "о",
  "один",
  "ещё",
  "бы",
  "такой",
  "только",
  "себя",
  "своё",
  "какой",
  "когда",
  "уже",
  "для",
  "вот",
  "кто",
  "да",
  "говорить",
  "год",
];

function App() {
  const [userInput, setUserInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  function nextWord() {
    if (userInput === words[currentWordIndex]) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserInput("");
    }
  }

  return (
    <div className="App">
      <Text
        words={words}
        userInput={userInput}
        currentWordIndex={currentWordIndex}
      ></Text>
      <Input
        input={userInput}
        setUserInput={setUserInput}
        nextWord={nextWord}
      ></Input>
    </div>
  );
}

export default App;
