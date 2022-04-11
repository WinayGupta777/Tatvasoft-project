import { ADD_MORE } from "./itemType"
import { SUB_MORE } from "./itemType"

// {add to cart}
const increaseItem=()=>{
    return{
        type: ADD_MORE
    }
}

// {remove}
const decreaseItem=()=>{
    return{
        type: SUB_MORE
    }
}
export {increaseItem, decreaseItem }