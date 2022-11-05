import { createSlice } from "@reduxjs/toolkit";
// Name of action
// initialValue of a state
// reducer

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=> {
            state.count+=1;
        },
        decrement: (state)=> {
            if(state.count <=0 || state.count==1)
            {
                state.count = 0;
            } else{
                state.count-=1;
            } 
        }
    },
});
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;