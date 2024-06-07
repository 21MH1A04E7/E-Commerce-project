import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  user:null,
  loading:true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserDetails:(state, action)=>{
        state.user=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setuserDetails} = userSlice.actions

export default userSlice.reducer