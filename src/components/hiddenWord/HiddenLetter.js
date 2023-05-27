import React, { useState, useEffect } from "react";
import classes from "./HiddenLetter.module.css";

export default function HiddenLetter(props) {
  const [wasGuessed, setGuessed] = useState(false);

  useEffect(() => {
    if (props.getCurrentLetter === props.letter) {
      setGuessed(true);
    }
  }, [props.getCurrentLetter]);

  return (
    <div className={classes.hiddenLetter}>
      {wasGuessed && <h2>{props.letter}</h2>}
      <div className={classes.underline} />
    </div>
  );
}
