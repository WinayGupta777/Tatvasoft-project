import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/items/itemActions";

const SingleProduct=(props)=>{
    return( 
        <div className="productbox">
            <div className="img_pro">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8667337/2022/1/27/31ca0fc8-9d39-4b94-bc46-58a2f7d3b4f51643279915303TRESemmeKeratinSmoothShampoo1l1.jpg"></img>
            </div>
            <div className="titlebox">{props.name}</div>
            <div className="descbox">
                Officia amet et in pariatur. Lorem do qui enim elit aute. Nulla do excepteur reprehenderit dolor. Proident officia minim esse proident dolore cupidatat laborum proident.
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