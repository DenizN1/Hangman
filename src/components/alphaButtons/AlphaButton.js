import { useState } from "react";
import classes from "./AlphaButton.module.css";

export default function AlphaButton(props) {
  const [clicked, setClicked] = useState(false);


  return (
    <div className={classes.alphaButton}>
     {!clicked && <button onClick={() => setClicked(true)}>{props.letter}</button>}
     {clicked && <button disabled>{props.letter}</button>}
    </div>
  );
}
