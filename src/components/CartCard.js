import { useState } from "react";

const Card=(props)=>{
    const [count,setCount] = useState(1);

    const onPlus=()=>{setCount(count + 1);}
    const onMinus=()=>{
        if (count > 1) {setCount(count - 1);}
    }
    return(
        <div className="card">
            <div className="thumb"></div>
            <div className="details">
                <div className="flat">
                    <b><p>{props.itemname}</p></b>
                    <b><p>{props.rprice}</p></b>
                </div>
                <div className="flat2">
                    <p>Cart item name</p>
                    <div className="flat2"><p id="originPrice">{props.oprice}</p><b> 50% off</b></div>
                </div>
                <div className="flat3">
                    <div className="cntr">
                        <button onClick={onPlus}>+</button>
                        <button id="cnt">{count}</button>
                        <button onClick={onMinus}>-</button>
                    </div>
                    <button id="rm">Remove</button>
                </div>
            </div>
        </div>  
    );
}
export default Card;