import { error } from 'console';
import { AxiosResponse } from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';


type ThunkArg = {
    email: string, 
    password: string
}


type TUser = {
    id: string,
    email: string,
    role: 'USER' | 'ADMIN'
}


const initialState = {
    isAuth: false,
    isAuthInProgress: true,
    user: {} as TUser
}

export const login = createAsyncThunk<any, ThunkArg>(
    '/api/login',
    async ({email, password}) => {
        try {
            const response = await AuthService.login(email, password);
        
            localStorage.setItem("token", response.data.accessToken);

            
            return response.data;
        } catch (e) {
            return Promise.reject(e.response?.data?.message);
        }
    }
)

export const registration = createAsyncThunk<any, ThunkArg>(
    '/api/registration',
    async ({email, password}) => {
        try {  
            const response = await AuthService.registration(email, password);
            localStorage.setItem("token", response.data.accessToken);
            console.log(response);
            return response.data; 
        } catch (e) {
            return Promise.reject(e.response?.data?.message);
        }
    }
)

export const checkAuth = createAsyncThunk<any, void>(
    '/api/refresh',
    async () => {
        try {
            const response = await AuthService.refresh();
            localStorage.setItem("token", response.data.accessToken);
            return response.data;
        } catch (e) {
            return Promise.reject(e.response?.data?.message);
        }
    }
)

export const logout = createAsyncThunk<any, void>(
    '/api/logout',
    async () => {
        try {
           const response = await AuthService.logout();
            localStorage.removeItem("token");
          
        } catch (e) {
            return Promise.reject(e.response?.data?.message);
        }
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(login.pending, (state) => {
                state.isAuthInProgress = true;
            })
        builder.addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.userDto; 
                state.isAuth = true;
                state.isAuthInProgress = false; 
            })
        builder.addCase(login.rejected, (state, action) => {
                console.log("login error", action);
                state.isAuthInProgress = false; 
            })

        builder.addCase(registration.pending, (state) => {
                state.isAuthInProgress = true;
            })
        builder.addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload.userDto; 
                state.isAuth = true;
                state.isAuthInProgress = false; 
            })
        builder.addCase(registration.rejected, (state) => {
                state.isAuthInProgress = false; 
            })
  
        builder.addCase(checkAuth.pending, (state) => {
                state.isAuthInProgress = true;
            })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
                
                console.log('checkAuth.fulfilled');
                state.user = action.payload.userDto;
                state.isAuth = true;
                state.isAuthInProgress = false; 
            })
        builder.addCase(checkAuth.rejected, (state) => {
                state.isAuthInProgress = false; 
            })
 
        builder.addCase(logout.pending, (state) => {
                state.isAuthInProgress = true;
            })
        builder.addCase(logout.fulfilled, (state) => {
                state.isAuth = false;
                state.isAuthInProgress = false; 
            })
        builder.addCase(logout.rejected, (state) => {
                console.log("logout error");
                state.isAuthInProgress = false; 
            })
 
    }
})




export default authSlice.reducer;