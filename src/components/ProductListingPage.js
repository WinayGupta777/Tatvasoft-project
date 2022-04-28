import TitleBar from "./TitleBar";
import AllProducts from "./ProList_AllProduct";
import SortBy from "./ProList_SortBy";
import "./ProductListingPage.css"
import "./RedButton.css"
import { useNavigate } from "react-router";

const ProductListingPage=()=>{
    const navigate = useNavigate();

    return(
        <div className="ProListing">
            <TitleBar title="Product Listing"/>
            <SortBy />
            <AllProducts />

            {/* This is taken from RedButton */}
            <div className="button">
                <button 
                 style={{height: "50px", width: "200px", fontSize: "24px"}}
                 className="red"
                 onClick={()=>navigate("/cartpage")}
                >Cart Page</button>
            </div>
        </div>
    );
}
export default ProductListingPage;