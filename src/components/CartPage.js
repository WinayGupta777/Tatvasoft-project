import Card from "./CartCard";
import TitleBar from "./TitleBar";
import styles from "./CartPage.css"
import { useState,useEffect } from "react";
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
        var r = axios.post("http://localhost:8080/getDetails")
        r.then((r)=>{
            console.log(r.data.details[0].item_name)
            setItems(r.data.details);
        })
        r.catch((err)=>console.log(err))
    },[]);



    return(
        <>
        <TitleBar title="Cart Page" />
        <div className="cart">
            <div className="center">
                <h3>My Shopping Bag  ({cartItems.length} Items)</h3>
                {cartItems.map(
                    (i)=><Card itemname={i.item_name}  oprice={i.original_price}  rprice={i.real_price}/>
                )}
                <button id="placeorder">Place order</button>
            </div>
        </div>  
        </>
    );
}
export default CartPage;