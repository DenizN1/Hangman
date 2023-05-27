import classes from "./Layout.module.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.layout}>
      {props.children}

      <Link onClick={refreshPage}>
        <img className={classes.refreshButton} src={process.env.PUBLIC_URL + "/refreshIcon.png"}></img>
      </Link>
    </div>
  );
}
