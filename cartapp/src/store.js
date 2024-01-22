import { configureStore } from "@reduxjs/toolkit";
import cusReducer from "./slices/customslice";

export const store=configureStore({
    devTools:true,
    reducer:{
        customer:cusReducer,
    }
})