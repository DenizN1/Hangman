import AlphaButtons from "./components/alphaButtons/AlphaButtons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { getRandomGermanWord } from "./words";
import { useState } from "react";
import HiddenWord from "./components/hiddenWord/HiddenWord";

export default function App() {
  const [getCurrentWord] = useState(getRandomGermanWord());
  const [getCurrentLetter, setCurrentLetter] = useState("");

  return (
    <Router>
      <Layout>
        <div>{getCurrentWord}</div>
        <HiddenWord
          getCurrentWord={getCurrentWord}
          getCurrentLetter={getCurrentLetter}
        />
        {/* <img src={process.env.PUBLIC_URL + "/images/hangman1.png"} alt="" /> */}
        <AlphaButtons setCurrentLetter={setCurrentLetter} />
      </Layout>
    </Router>
  );
}
