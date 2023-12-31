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
            window.sessionStorage.setItem('user', JSON.stringify(response.data));
            window.sessionStorage.setItem('token', JSON.stringify(response.data.body.token));
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
        addToken: (state, action) => {
            state.token = action.payload;
            return state;
        },
        setUser: (state, action) => {
            state = { ...action.payload };
            return state;
        },
    }
})

export const { addToken, addUser, setUser} = authSlice.actions;
export default authSlice.reducer;