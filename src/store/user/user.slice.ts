import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    id: -1,
    name: '',
    email: ''
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction) => {
            return payload
        },
        resetUser: (state) => {
            return initialState
        }
    }
})

export const { setUser, resetUser } = userSlice.actions

export const selectAuth = (state) => state.user.isAuth

export default userSlice.reducer