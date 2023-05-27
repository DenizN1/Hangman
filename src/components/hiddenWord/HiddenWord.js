import HiddenLetter from "./HiddenLetter";
import classes from "./HiddenWord.module.css";

export default function HiddenWord(props) {
  return (
    <div className={classes.hiddenWord}>
      {props.getCurrentWord.split("").map((char, index) => (
        <HiddenLetter
          key={index}
          letter={char.toUpperCase()}
          getCurrentLetter={props.getCurrentLetter}
        />
      ))}
    </div>
  );
}
