import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./ProList_SingleProduct";
const AllProducts=()=>{
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        var r = axios.get("http://localhost:8080/getProductItems")
        r.then((r)=>{
            console.log(r.data.details[0].ItemName)
            setProductItems(r.data.details);
        })
        r.catch((err)=>console.log(err))
    },[]);
    return(
        <div className="MainBox">
            {productItems.length !== 0 ?  productItems.map(
                    (i, key)=><SingleProduct name={i.ItemName} desc={i.Description}  imgurl={i.Url} oprice={i.O_price} rprice={i.R_price} key={key} />
            ) : <h1>Fetching Details From Server</h1>}
        </div>
    );
}
export default AllProducts;