import { createStore } from "redux";
import itemReducer from "./items/itemReducer";

const store = createStore(itemReducer);
export default store;