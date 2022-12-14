import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice ({
    name: 'auth',
    initialState: {
        user: {name: null, email: null},
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {}
})