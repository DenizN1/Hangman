import AlphaButtons from "./components/alphaButtons/AlphaButtons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { getRandomGermanWord } from "./words";
import { useState } from "react";
import HiddenWord from "./components/hiddenWord/HiddenWord";
import HangmanContainer from "./components/hangmanContainer/HangmanContainer";

export default function App() {
  const [getCurrentWord] = useState(getRandomGermanWord());
  const [getCurrentLetter, setCurrentLetter] = useState("");
  const [getWrongAttempts, setWrongAttempts] = useState(0);

  return (
    <Router>
      <Layout>
        <HangmanContainer/>
        {/* <img src={process.env.PUBLIC_URL + "/images/hangman1.png"} alt="" /> */}
        <div>{getCurrentWord}</div>
        <HiddenWord
          getCurrentWord={getCurrentWord}
          getCurrentLetter={getCurrentLetter}
        />
        <AlphaButtons setCurrentLetter={setCurrentLetter} />
      </Layout>
    </Router>
  );
}
