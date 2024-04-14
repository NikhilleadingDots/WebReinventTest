
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: string;
  authData:{};
}

const initialState: AuthState = {
  user: "",
  authData: {},
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authData = action.payload;
    },
    logoutUser:(state, action: PayloadAction<string>) =>{
        state.authData = initialState;
    }
  }
});

export const { setUser, setAuthToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;