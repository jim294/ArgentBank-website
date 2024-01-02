import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    id: null,
    email: '',
    token: null,
    firstName: '',
    lastName: '',
    userName: '',
}

export const loginUser = createAsyncThunk('user', async ({ email, password }) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

        if (response.data.body.token) {
            window.localStorage.setItem('user', JSON.stringify(response.data));
            window.localStorage.setItem('token', JSON.stringify(response.data.body.token));
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
        clearUser: (state) => {
            state.id = null;
            state.email = '';
            state.token = null;
            state.firstName = '';
            state.lastName = '';
            state.userName = '';
            return state;
        }
    }
})

export const { addToken, addUser, setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;