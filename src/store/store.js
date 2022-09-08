import { configureStore } from "@reduxjs/toolkit";
import { exploreSlice } from "./Slice/exploreSlice";


const store = configureStore({
    reducer:{
        explore: exploreSlice.reducer
    }
})

export default store