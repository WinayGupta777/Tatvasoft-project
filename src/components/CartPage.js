import Card from "./CartCard";
import TitleBar from "./TitleBar";
import "./CartPage.css"
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
    //const [status, setStatus] = useState(false);


    useEffect(() => {
        var timeOut = setTimeout(()=>tick(),1000)
    },[]);

    const tick=()=>{
        console.log("Running Tick()");
        var r = axios.post("http://localhost:8080/getCartedItems")
        r.then((r)=>{
            console.log("Remaining : "+r.data.details)
            setItems(r.data.details);
        })
        r.catch((err)=>console.log(err))
    }


    const citems = useSelector(
        (state)=>state.items
    );

    const onRemoveItem=(itemname)=>{
        axios.post("http://localhost:8080/deleteCartItem",{
            ItemName: itemname
        })
        .then((r)=>{
            console.log("ItemRemoved: " + r.data)
        })
        .catch((err)=>console.log(err));
        setTimeout(()=>tick(),2000);
    }
    


    return(
        <>
            {console.log("Rendernig All Card")}
            <TitleBar title="Cart Page" />
            <div className="cart">
                <div className="center">
                    <h3>My Shopping Bag  ({citems} Items)</h3>
                    {cartItems.length !== 0 ?  cartItems.map(
                        (i, key)=><Card key={key} itemname={i.ItemName}  oprice={i.O_price}  rprice={i.R_price} runOnRemove={onRemoveItem} />
                    ) : <h1>Nothing in Cart</h1>}
                    <button id="placeorder">Place order</button>
                </div>
            </div>  
        </>
    );
}
export default CartPage;