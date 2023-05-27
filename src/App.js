import AlphaButtons from "./components/alphaButtons/AlphaButtons";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <img src={process.env.PUBLIC_URL + "/images/hangman1.png"} alt=""/>
      <AlphaButtons />
    </Layout>
  );
}


// process.env.PUBLIC_URL +