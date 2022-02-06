const ListChild=(props)=>{
    return(
        <div className="list">
            <div className="row">
                <div id="id">{props.id}</div>
                <div id="title">{props.name}</div>
                <div id="desc">{props.desc}</div>
                <div id="query">{props.query}</div>
                <div id="two-btn">
                    <button id="tbtn">Edit</button>
                    <button id="tbtn">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default ListChild;