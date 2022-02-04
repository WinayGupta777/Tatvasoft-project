import Card from "./CartCard";
import TitleBar from "./TitleBar";
const CartPage=()=>{
    return(
        <>
        <TitleBar title="Cart Page" />
        <div className="cart">
            <div className="center">
                <h3>My Shopping Bag  (3 Items)</h3>
                <Card itemname="Shampoo"  oprice="1000"  rprice="500"/>
                <Card itemname="Books"  oprice="540"  rprice="150"/>
                <Card itemname="Ear phone"  oprice="860"  rprice="430"/>
                <button id="placeorder">Place order</button>
            </div>
        </div>  
        </>
    );
}
export default CartPage;