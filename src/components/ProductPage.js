import TitleBar from "./TitleBar";
import ProductSearch from "./ProductSearchBar";
//import ListChild from "./ProductListChild";
import TableListing from "./ProList_table";
import "./ProductPage.css"

const ProductPage=()=>{
    // const jsonFile = [
    //     {
    //         "id" : 1,
    //         "name" : "Shampoo",
    //         "desc" : "This is Shampoo",
    //         "query" : "This is Query part",
    //     },
    //     {
    //         "id" : 2,
    //         "name" : "Shampoo1",
    //         "desc" : "This is Shampoo1",
    //         "query" : "This is Query part1",
    //     },
    //     {
    //         "id" : 3,
    //         "name" : "Shampoo2",
    //         "desc" : "This is Shampoo2",
    //         "query" : "This is Query part2",
    //     },
    //     {
    //         "id" : 4,
    //         "name" : "Shampoo4",
    //         "desc" : "This is Shampoo4",
    //         "query" : "This is Query part4",
    //     },
    //     {
    //         "id" : 5,
    //         "name" : "Shampoo5",
    //         "desc" : "This is Shampoo5",
    //         "query" : "This is Query part5",
    //     },
    //     {
    //         "id" : 6,
    //         "name" : "Shampoo6",
    //         "desc" : "This is Shampoo6",
    //         "query" : "This is Query part6",
    //     },
    // ]


    return(
        <div className="product">
            <TitleBar title="Product page"/>
            <ProductSearch />
            <TableListing />
        </div>
    );
}
export default ProductPage;