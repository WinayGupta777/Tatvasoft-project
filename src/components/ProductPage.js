import TitleBar from "./TitleBar";
import ProductSearch from "./ProductSearchBar";
import ListChild from "./ProductListChild";
const ProductPage=()=>{
    return(
        <div className="product">
            <TitleBar title="Product page"/>
            <ProductSearch />
            <ListChild />
        </div>
    );
}
export default ProductPage;