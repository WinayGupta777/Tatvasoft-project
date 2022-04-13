import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/items/itemActions";

const SingleProduct=(props)=>{
    return( 
        <div className="productbox">
            <div className="img_pro">
                <img src={props.imgurl}></img>
            </div>
            <div className="titlebox">{props.name}</div>
            <div className="descbox">
                {props.desc}
            </div>
            <div className="pricebox">
                <div id="one"><p>MRP</p> <p>₹1000</p> <p>20.00% OFF</p></div>
                <div id="two"><p>₹ {props.rprice}</p></div>
            </div>
            <FlipButton />
        </div>
    );
}
export default SingleProduct;   

const FlipButton=(props)=>{
    const [state, setState]= useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const added2cart=()=>{
        setState(!state);
        dispatch(increaseItem());
    }
    const removed=()=>{
        setState(!state);
        dispatch(decreaseItem());
    }
    return(
        <div>
        { state==true ?
        <div className="add2cart">
          <button onClick={added2cart}>ADD TO CART</button>
        </div>    
        : 
        <div className="add2cart">
            <button onClick={removed}>Remove</button>
        </div>
        }  
        </div>
    );
}