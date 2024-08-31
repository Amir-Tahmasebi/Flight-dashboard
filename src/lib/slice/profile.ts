import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ProfileInitialState as InitialState, fetchUsernamePayload } from './../../types'

import { RootState } from "./../store";
import { ApiServices } from './../../features/dashboardLayout'

const initialState: InitialState = {
    username: "",
    isLoading: false
}

export const fetchUsername = createAsyncThunk('auth/fetchUserLogin', async () => {
    const response = await ApiServices.fetchUsername()
    return response
})

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsername.fulfilled, (state, action: PayloadAction<fetchUsernamePayload>) => {
                if (action.payload.result === 'success') {
                    state.username = action.payload.username
                }
                state.isLoading = false
            }).addCase(fetchUsername.pending, (state) => {
                state.isLoading = true
            })
    },
});

export const { reducer, actions: Actions } = profileSlice;

export const selectedProfile = (state: RootState) => state.profile;
