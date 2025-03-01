import { createStore } from "redux";
import { counterReducer } from "../Reducer";

export const Store = createStore(counterReducer)