import { useState } from "react";
import classes from "./AlphaButton.module.css";

export default function AlphaButton(props) {
  const [clicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(true);
    props.setCurrentLetter(props.letter);
  };

  return (
    <div className={classes.alphaButton}>
      {!clicked && <button onClick={onButtonClick}>{props.letter}</button>}
      {clicked && <button disabled>{props.letter}</button>}
    </div>
  );
}
