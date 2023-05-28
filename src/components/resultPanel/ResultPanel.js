import classes from "./ResultPanel.module.css";

export default function ResultPanel(props) {

    const gameWon = () =>{
        return props.getWrongAttempts != 7;
    }

  return (
    <div className={classes.resultPanel}>
      {gameWon() && <h2>Gewonnen</h2>}
      {!gameWon() && <h2>Verloren</h2>}
      <h3>Das gesuchte Wort lautet: {props.getCurrentWord}</h3>
      <button onClick={props.refreshPage}>NOCHMAL SPIELEN</button>
    </div>
  );
}
