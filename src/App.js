import AlphaButtons from "./components/alphaButtons/AlphaButtons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { getRandomGermanWord } from "./words";

export default function App() {
  const currentWord = getRandomGermanWord();

  return (
    <Router>
      <Layout>
        <div>{getRandomGermanWord()}</div>
        <img src={process.env.PUBLIC_URL + "/images/hangman1.png"} alt="" />
        <AlphaButtons />
      </Layout>
    </Router>
  );
}
