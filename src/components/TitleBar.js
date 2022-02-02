const TitleBar=(props)=>{
    console.log(props);
    return(
        <div className="title">
            {props.title}
        </div>
    );
}
export default TitleBar;