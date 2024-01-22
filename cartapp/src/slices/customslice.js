import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const sliceCustom= createSlice({
    name:"addCustomer",
    initialState,
    reducers:{
        addcustomer(state,action){
            console.log(action.payload)
            state.push(action.payload);
        },
        updateCustomer(state,action){
            return state.map((val)=>{
                if(val.id===action.payload.id){
                    return action.payload
                }
                else{
                    return val
                }
            })
        },
        deletecustomer(state,action){
           const id= action.payload;
           return state.filter((val)=>val.id !== id);
        }
    }
})
export const {addcustomer,deletecustomer,updateCustomer} = sliceCustom.actions;
export default sliceCustom.reducer;