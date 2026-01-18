import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        user: JSON.parse(localStorage.getItem('user')) || null,  // user, token, userID will come from local storage
        token: localStorage.getItem('token') || null,
        userId: localStorage.getItem('userId') || null
    },
    reducers: {
        setCredentials: (state, action) => {
        },

        logout: (state, action) => {
        },
    }
})

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions // why (yet to find out)

export default authSlice.reducer // why 