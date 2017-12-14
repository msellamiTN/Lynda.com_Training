import C from "./constants";
import appReducer from "./store/reducers";
import {createStore} from "redux";

const initialState = (localStorage['redux-store']) ?
                        JSON.parse(localStorage['redux-store']):
                        {}

const store = createStore(appReducer, initialState);

store.subscribe(()=>(console.log(store.getState())));

store.subscribe(()=>{
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
});