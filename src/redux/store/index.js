import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers/index";
import searchReducer from "../reducers/searchReducer";



const bigReducer = combineReducers({
    main: mainReducer,
    search: searchReducer
})
const store = configureStore({
    reducer: bigReducer
})

export default store;