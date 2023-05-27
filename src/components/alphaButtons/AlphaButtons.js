import AlphaButton from "./AlphaButton";
import classes from "./AlphaButtons.module.css";

export default function AlphaButtons() {
  return (
    <div className={classes.alphaButtons}>
      {Array.from({ length: 26 }).map((_, index) => (
        <AlphaButton key={index} letter={String.fromCharCode(65 + index)} />
      ))}
    </div>
  );
}
