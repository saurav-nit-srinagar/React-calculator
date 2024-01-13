import style from "./button.module.css";
function Button({onbuttonClick}) {
  let ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonContainer}>
      {ButtonName.map((item,index) => (
        <button  onClick={()=>onbuttonClick(item)} key={index} className={style.button}>{item}</button>
      ))}
    </div>
  );
}
export default Button;
