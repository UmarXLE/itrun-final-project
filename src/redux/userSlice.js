 import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : 'user',
    initialState:{
        // это начальное состояние  
        currentUser : null
    },
    reducers: {
        // функция которые управляют состоянием нашего глобалльногт состояния 
        loginStart: (state) => {},
        loginSuccess: (state,action) => {
            state.currentUser = action.payload
            // payload полезные данные логин пароль и тд 
        },
        loginFailed: (state) => {}

    }
 })



 export default userSlice.reducer

 export const { loginSuccess , loginStart , loginFailed } = userSlice.actions


