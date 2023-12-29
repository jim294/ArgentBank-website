import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    user:"",
    token:"",
    loading: false
}

const API_URL = 'http://localhost:3001/api/v1/user/';

// export const loginUser = createAsyncThunk('user', async (email, password) => {
export const loginUser = ( (email, password) => {
    const newMail = email;
    const newPassword= password;
    console.log(newMail, newPassword)

    return axios.post(API_URL + 'login', { email, password }).then(response => {
        console.log(response.data.body.token);
        if (response.data.body.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    });
    
//     try {
//         const res = await fetch("http://localhost:3001/api/v1/user/login",{
//         method:'POST',
//         headers:{
//             "accept": "application/json",
//             "Content-Type": "application/json",
//             // Authorization: localStorage.getItem('token')
//         },
//         body: JSON.stringify({
//             // email, password
//             "email": "tony@stark.com",
//             "password": "password123"
//             // "email": `"${newMail}"`,
//             // "password": `"${newPassword}"`
//           })
//     })
//     const response =  await res.json();
//     console.log(response)
// } catch (error) {
//     console.error(`An error has occurred while logging in with the following credentials : ${error}`);
// }
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