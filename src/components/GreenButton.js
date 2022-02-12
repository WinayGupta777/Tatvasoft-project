import styles from "./GreenButton.css"
const GreenButton=(props)=>{
    return(
        <div className="button">
            <button style={{height: props.h, width: props.w, fontSize: props.fs}}  className="green">{props.text}</button>
        </div>
    );
}
export default GreenButton;