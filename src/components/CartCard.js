const Card=()=>{
    return(
        <div className="card">
            <div className="thumb"></div>
            <div className="details">
                <div className="flat">
                    <b><p>Campus Sutra</p></b>
                    <b><p>500</p></b>
                </div>
                <div className="flat2">
                    <p>Cart item name</p>
                    <div className="flat2"><p id="originPrice">1000</p><b> 50% off</b></div>
                </div>
                <div className="flat3">
                    <div className="cntr">
                        <button>+</button>
                        <button>1</button>
                        <button>-</button>
                    </div>
                    <button id="rm">Remove</button>
                </div>
            </div>
        </div>  
    );
}
export default Card;