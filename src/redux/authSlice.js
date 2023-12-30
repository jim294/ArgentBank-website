import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    user:"",
    token:"",
    loading: false
}

export const loginUser = createAsyncThunk('user', async ({ email, password }) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

        if (response.data.body.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', JSON.stringify(response.data.body.token));
        }

        return response.data;
    } catch (error) {
        console.error(`An error has occurred while retrieving user information : ${error}`);
        throw error;
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                state.token = JSON.parse(token);
            }
        },
        setUser: (state) => {
            const user = localStorage.getItem('user');
            if (user) {
                state.user = JSON.parse(user);
            }
        }
    }
})

export const { addToken, addUser} = authSlice.actions;
export default authSlice.reducer;