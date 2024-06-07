import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  user:null,
  sucess:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserDetails:(state, action)=>{
        console.log(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setuserDetails} = userSlice.actions

export default userSlice.reducer