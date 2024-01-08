import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  token: null,
  firstName: "",
  lastName: "",
  userName: "",
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const authSlice = createSlice({
  name: "user",
  initialState: getUserFromLocalStorage() || initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    setUser: (state, action) => {
      const { id, email, token, firstName, lastName, userName } =
        action.payload;
      state.id = id;
      state.email = email;
      state.token = token;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
      localStorage.setItem("user", JSON.stringify(state));
    },
    clearUser: (state) => {
      localStorage.removeItem("user");
      return initialState;
    },
    updateUser: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { addToken, setUser, clearUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
