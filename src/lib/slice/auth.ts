import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthInitialState as InitialState, UserData, FetchUserLoginPayload } from './../../types'
import { ApiServices } from './../../page/auth/login'
import { RootState } from "./../store";

const initialState: InitialState = {
    isUserLoggedIn: false,
    showModal: false,
    isLoading: false
}

export const fetchUserLogin = createAsyncThunk('auth/fetchUserLogin', async (userData: UserData) => {
    const response = await ApiServices.fetchLogin(userData)
    return response
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleClose(state) {
            state.showModal = false
        },
        handleLogout(state) {
            state.isUserLoggedIn = false;
            window.localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserLogin.fulfilled, (state, action: PayloadAction<FetchUserLoginPayload>) => {
                if (action.payload.result === 'success' && action.payload.token) {
                    state.isUserLoggedIn = true;
                    localStorage.setItem('token', action.payload.token)
                } else {
                    state.isUserLoggedIn = false
                    state.showModal = true
                }
                state.errorMessage = action.payload.result
                state.isLoading = false
            })
            .addCase(fetchUserLogin.pending, (state) => {
                state.isLoading = true
                state.errorMessage = ''
            })
            .addCase(fetchUserLogin.rejected, (state) => {
                state.showModal = true
                state.isUserLoggedIn = false;
                state.isLoading = false
                state.errorMessage = 'error'
            })
    },
});

export const { reducer, actions: Actions } = authSlice;

export const selectedAuth = (state: RootState) => state.auth;
