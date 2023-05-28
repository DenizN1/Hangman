import classes from "./RevealedWord.module.css";

export default function RevealedWord(props) {
  return (
    <div className={classes.revealedWord}>
      <h1>{props.getCurrentWord}</h1>
    </div>
  );
}
