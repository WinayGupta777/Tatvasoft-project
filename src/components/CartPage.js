import Card from "./CartCard";
import TitleBar from "./TitleBar";
const CartPage=()=>{
    return(
        <>
        <TitleBar title="Cart Page" />
        <div className="cart">
            <div className="center">
                <h3>My Shopping Bag  (3 Items)</h3>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>  
        </>
    );
}
export default CartPage;