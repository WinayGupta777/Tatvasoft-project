import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/items/itemActions";

const Card=(props)=>{
    const [count,setCount] = useState(1);
    const dispatch = useDispatch();
    const citems = useSelector(
        (state)=>state.items
    );

    console.log(citems);

    const onPlus=()=>{
        setCount(count + 1);
        dispatch(increaseItem());
    }
    const onMinus=()=>{
        if (count > 1) {
            setCount(count - 1);
            dispatch(decreaseItem());
        }
    }

    const onRemove=()=>{
        console.log("It has count:  " + count);
        for (let i = 0; i < count; i++) {
            setCount(count -1);
            dispatch(decreaseItem());
            console.log("Decresed");
        }
        props.runOnRemove(props.itemname)
        console.log("Decresed; Count is now: "+ count);
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
                            <button onClick={()=>onPlus()}>+</button>
                            <button id="cnt">{count}</button>
                            <button onClick={()=>onMinus()}>-</button>
                        </div>
                        <button id="rm" onClick={()=>onRemove()}>Remove</button>
                    </div>
                </div>
        </div>
    );
}
export default Card;