import Card from "./CartCard";
import TitleBar from "./TitleBar";
import styles from "./CartPage.css"

const cartItems=[
    {
        "name" : "Shampoo",
        "original_price" : 1000,
        "real_price" : 500
    },
    {
        "name" : "Books",
        "original_price" : 540,
        "real_price" : 120
    },
    {
        "name" : "Ear phones",
        "original_price" : 680,
        "real_price" : 460
    },
    {
        "name" : "Ear phones",
        "original_price" : 680,
        "real_price" : 460
    }
]

const CartPage=()=>{
    return(
        <>
        <TitleBar title="Cart Page" />
        <div className="cart">
            <div className="center">
                <h3>My Shopping Bag  ({cartItems.length} Items)</h3>
                {cartItems.map(
                    (i)=><Card itemname={i.name}  oprice={i.original_price}  rprice={i.real_price}/>
                )}
                <button id="placeorder">Place order</button>
            </div>
        </div>  
        </>
    );
}
export default CartPage;