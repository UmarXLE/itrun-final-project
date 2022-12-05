import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:'news',
    initialState:{
        news:[]
    },
    reducers:{
        addNews(state ,action){
            state.news.push(action.payload.news)
        }
    }
})



export const  { addNews } = newsSlice.actions
export default newsSlice.reducer
