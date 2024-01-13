import style from "./App.module.css";
import Button from "./component/button";
import Display from "./component/display";

function App() {
  let ButtonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={style.calculator}>
      <Display></Display>
      <Button button={ButtonName}></Button>
    </div>
  );
}
export default App;
