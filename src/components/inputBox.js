import "./InputBox.css";

const InputBox=(props)=>{
    return(
        <div className="ibox">
            <p className="label">{props.label}</p>
            <input type={props.type} style={{width: props.width}} onChange={(e)=>props.onChangeMethod(e)} required/>
        </div>
    );
}
export default InputBox;