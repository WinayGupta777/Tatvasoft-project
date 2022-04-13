import Card from "./CartCard";
import TitleBar from "./TitleBar";
import styles from "./CartPage.css"
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// const cartItems=[
//     {
//         "name" : "Shampoo",
//         "original_price" : 1000,
//         "real_price" : 500
//     },
//     {
//         "name" : "Books",
//         "original_price" : 540,
//         "real_price" : 120
//     },
//     {
//         "name" : "Ear phones",
//         "original_price" : 680,
//         "real_price" : 460
//     },
//     {
//         "name" : "Ear phones",
//         "original_price" : 680,
//         "real_price" : 460
//     }
// ]

const CartPage=()=>{
    const [cartItems, setItems] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        var r = axios.post("http://localhost:8080/getCartedItems")
        r.then((r)=>{
            console.log(r.data.details[0].ItemName)
            setItems(r.data.details);
        })
        r.catch((err)=>console.log(err))
    },[]);

    const citems = useSelector(
        (state)=>state.items
    );


    return(
        <>
        <TitleBar title="Cart Page" />
        <div className="cart">
            <div className="center">
                <h3>My Shopping Bag  ({citems} Items)</h3>
                {cartItems.map(
                    (i)=><Card itemname={i.ItemName}  oprice={i.O_price}  rprice={i.R_price}/>
                )}
                <button id="placeorder">Place order</button>
            </div>
        </div>  
        </>
    );
}
export default CartPage;