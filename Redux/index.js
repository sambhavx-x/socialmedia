import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    user:null,
    error:false,
    isfetching:false
};
 
export const authSlice=createSlice({
name:'auth',INITIAL_STATE,
reducers:{
    
}

})
export default authSlice.reducer;