import AlphaButton from "./AlphaButton";
import classes from "./AlphaButtons.module.css";
import { Link } from "react-router-dom";

export default function AlphaButtons(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.alphaButtons}>
      <div className={classes.alphabet}>
        {Array.from({ length: 26 }).map((_, index) => (
          <AlphaButton
            key={index}
            letter={String.fromCharCode(65 + index)}
            setCurrentLetter={props.setCurrentLetter}
          />
        ))}
      </div>
      <Link onClick={refreshPage}>
        <img
          className={classes.refreshButton}
          src={process.env.PUBLIC_URL + "/refreshIcon.png"}
        ></img>
      </Link>
    </div>
  );
}
