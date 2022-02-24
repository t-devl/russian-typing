import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import { text } from "./data";

function App() {
  const [userInput, setUserInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(getRandomWords());
  }, []);

  useEffect(() => {
    if (currentWordIndex && currentWordIndex === words.length) {
      setWords(getRandomWords());
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex]);

  function getRandomWords() {
    let randomNumber = Math.floor(Math.random() * text.length);
    let wordsFromText = text[randomNumber].split(" ");
    return shuffle(wordsFromText);
  }

  function shuffle(arr) {
    let shuffledArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
      let j = Math.floor(Math.random() * (arr.length - i) + i);
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  }

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
