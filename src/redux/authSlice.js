import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    user:"",
    token:"",
    loading: false
}

export const loginUser = createAsyncThunk('user', async ({email, password}) => {

    return axios.post("http://localhost:3001/api/v1/user/login", { email, password }).then(response => {
        console.log(response.data.body.token);
        if (response.data.body.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', JSON.stringify(response.data.body.token))
        }
        
        return response.data;
    });
})


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addToken:(state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser:(state, action) => {
            state.user = localStorage.getItem('user')
        }
    },
    // extraReducers: {
    //     [ loginUser.pending]:(state, action) => {
    //         state.loading = true
    //     },
    //     [ loginUser.fulfilled]:(state, {payload:{user, token}}) => {
    //         state.loading = false
    //         state.token = token;
    //         state.user = user;
    //         localStorage.setItem("token", JSON.stringify(token))
    //         localStorage.setItem("token", JSON.stringify(user))
    //     },
    //     [ loginUser.pending]:(state, action) => {
    //         state.loading = true
    //     }
    // }
})

export const { addToken, addUser} = authSlice.actions;
export default authSlice.reducer;