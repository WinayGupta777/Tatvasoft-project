import "./showMsg.css";

const ShowMsg=(props)=>{
    return(
        <div className="errbox">
            <p>{props.msg}</p>
        </div>
    );
}
export default ShowMsg;