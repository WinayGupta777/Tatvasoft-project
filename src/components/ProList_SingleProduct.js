import { useState } from "react";
//import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/items/itemActions";
import axios from "axios";

const SingleProduct=(props)=>{
    const [state, setState]= useState(true);
    //const navigate = useNavigate();
    const dispatch = useDispatch();



    const added2cart=()=>{
        setState(!state);
        dispatch(increaseItem());
        
        axios.post("http://localhost:8080/putCartItems",{
            item_name: props.name,
            o_price: props.oprice,
            r_price: props.rprice
        })
        .then((r)=>console.log(r.data))
        .catch((err)=>console.log(err));
    }
    const removed=()=>{
        setState(!state);
        dispatch(decreaseItem());

        axios.post("http://localhost:8080/deleteCartItem",{
            ItemName: props.name
        })
        .then((r)=>console.log(r))
        .catch((err)=>console.log(err));
    }
    return( 
        <div className="productbox">
            <div className="img_pro">
                <img src={props.imgurl} alt="ImageOfProduct" ></img>
            </div>
            <div className="titlebox">{props.name}</div>
            <div className="descbox">
                {props.desc}
            </div>
            <div className="pricebox">
                <div id="one"><p>MRP</p> <p>₹1000</p> <p>20.00% OFF</p></div>
                <div id="two"><p>₹ {props.rprice}</p></div>
            </div>
            {/* <FlipButton /> */}
            { state===true ?
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
export default SingleProduct;   