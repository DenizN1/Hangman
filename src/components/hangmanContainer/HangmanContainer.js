import { useEffect } from "react";
import classes from "./HangmanContainer.module.css";

export default function HangmanContainer(props) {
  function getHangmanImage() {
    var imagePath = process.env.PUBLIC_URL;

    switch (props.getWrongAttempts) {
      case 0:
        imagePath += "/images/hangman1.png";
        break;
      case 1:
        imagePath += "/images/hangman2.png";
        break;
      case 2:
        imagePath += "/images/hangman3.png";
        break;
      case 3:
        imagePath += "/images/hangman4.png";
        break;
      case 4:
        imagePath += "/images/hangman5.png";
        break;
      case 5:
        imagePath += "/images/hangman6.png";
        break;
      case 6:
        imagePath += "/images/hangman7.png";
        break;
      case 7:
        imagePath += "/images/hangman8.png";
        break;
    }
    return imagePath;
  }

  useEffect(() => {
    if (props.getCurrentLetter != "") {
      if (props.getCurrentWord.includes(props.getCurrentLetter)) {
        props.setCorrectAttempts(props.getCorrectAttempts + 1);
      } else {
        props.setWrongAttempts(props.getWrongAttempts + 1);
      }
    }
  }, [props.getCurrentLetter]);

  return (
    <div className={classes.hangmanContainer}>
      <img src={getHangmanImage()} />
    </div>
  );
}
