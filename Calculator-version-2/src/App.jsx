import { useState } from "react";
import style from "./App.module.css";
import Button from "./component/button";
import Display from "./component/display";

function App() {
  let [calVal, setCalVal] = useState("");
  let onbuttonClicked= (buttontext) => {
    if (buttontext === "C") {
      setCalVal(" ")
      
    }else if(buttontext==="=")
    {
      let result = eval(calVal);
      setCalVal(result);

    } else {
      const newdisplay = calVal + buttontext;
      setCalVal(newdisplay);
      
    }
  };
  return (
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <Button
        onbuttonClick={onbuttonClicked}
      ></Button>
    </div>
  );
}
export default App;
