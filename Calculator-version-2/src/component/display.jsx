import style from "./display.module.css";
function Display({ displayValue }) {
  return (
    <input
      value={displayValue}
      type="text"
      className={style.display}
      readOnly
    />
  );
}
export default Display;
