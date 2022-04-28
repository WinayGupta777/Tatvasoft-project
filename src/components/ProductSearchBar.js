import "./TitleBar";
const ProductSearch=()=>{
    return(
        <div className="pro-search">
            <div>
                <input type="text" id="inpPro" placeholder="Search..."></input>
                <button id="placeorder">Add Product</button>
            </div>
        </div>
    );
}
export default ProductSearch;