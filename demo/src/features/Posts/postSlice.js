import { createSlice } from "@reduxjs/toolkit";



const initialState={
    listPost:[],
    listComment:[]
}
export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        postPost:(state, action)=>{
        state.listPost=action.payload
        },
       setListcomment:(state, action)=>{
        state.listComment=action.payload
       }
    }

})
export const { postPost ,setListcomment }= postSlice.actions
export default postSlice.reducer;