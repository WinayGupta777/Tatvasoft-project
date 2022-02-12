import { ADD_MORE } from "./itemType"
import { SUB_MORE } from "./itemType"
const initalState = {
    items: 0
}

const itemReducer=(state = initalState, action)=>{
    switch (action.type) {
        case ADD_MORE: return{
            items: state.items + 1
        }
        case SUB_MORE: return{
            items: state.items - 1
        }
        default: return state
    }
}

export default itemReducer;