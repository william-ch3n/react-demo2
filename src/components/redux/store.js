import { createStore } from "redux";
import reducer from "./reducers/reducers";

const store = createStore(reducer);

console.log(store.getState());

export default store;
