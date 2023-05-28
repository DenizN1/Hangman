import AlphaButtons from "./components/alphaButtons/AlphaButtons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { getRandomGermanWord } from "./words";
import { useEffect, useState } from "react";
import HiddenWord from "./components/hiddenWord/HiddenWord";
import HangmanContainer from "./components/hangmanContainer/HangmanContainer";
import ResultPanel from "./components/resultPanel/ResultPanel";
import RevealedWord from "./components/revealedWord/RevealedWord";

export default function App() {
  const [getCurrentWord] = useState(getRandomGermanWord().toUpperCase());
  const [getCurrentLetter, setCurrentLetter] = useState("");
  const [getWrongAttempts, setWrongAttempts] = useState(0);
  const [getCorrectAttempts, setCorrectAttempts] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  function getUniqueWordLength() {
    return [...new Set(getCurrentWord)].join("").length;
  }

  useEffect(() => {
    if (
      getWrongAttempts === 7 ||
      getUniqueWordLength() === getCorrectAttempts
    ) {
      setGameEnded(true);
    }
  }, [getWrongAttempts, getCorrectAttempts]);

  return (
    <Router>
      <Layout>
        <HangmanContainer
          getCurrentWord={getCurrentWord.toUpperCase()}
          getCurrentLetter={getCurrentLetter}
          getWrongAttempts={getWrongAttempts}
          setWrongAttempts={setWrongAttempts}
          getCorrectAttempts={getCorrectAttempts}
          setCorrectAttempts={setCorrectAttempts}
        />
        {!gameEnded && (
          <div>
            <RevealedWord getCurrentWord={getCurrentWord} />
            <HiddenWord
              getCurrentWord={getCurrentWord}
              getCurrentLetter={getCurrentLetter}
            />
            <AlphaButtons
              setCurrentLetter={setCurrentLetter}
              refreshPage={refreshPage}
            />
          </div>
        )}

        {gameEnded && (
          <ResultPanel
            getWrongAttempts={getWrongAttempts}
            getCurrentWord={getCurrentWord}
            refreshPage={refreshPage}
          />
        )}
      </Layout>
    </Router>
  );
}
