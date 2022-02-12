import styles from "./RedButton.css"
const RedButton=(props)=>{
    return(
        <div className="button">
            <button style={{height: props.h, width: props.w, fontSize: props.fs}}  className="red">{props.text}</button>
        </div>
    );
}
export default RedButton;