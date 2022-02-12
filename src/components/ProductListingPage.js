import TitleBar from "./TitleBar";
import AllProducts from "./ProList_AllProduct";
import SortBy from "./ProList_SortBy";
import styles from "./ProductListingPage.css"

const ProductListingPage=()=>{
    return(
        <div className="ProListing">
            <TitleBar title="Product Listing"/>
            <SortBy />
            <AllProducts />
        </div>
    );
}
export default ProductListingPage;