import style from "./button.module.css"
function Button({button})
{
    return (
        <div className={style.buttonContainer}>
            {button.map((item) => <button className={style.button}>{item}</button>)}
      </div>
    )
}
export default Button;
