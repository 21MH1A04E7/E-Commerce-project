import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user:null,
  loading:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserDetails:(state, action)=>{
        state.user=action.payload
    },
    startLogin:(state)=>{
      state.loading=true;
    },
    loginSuccess:(state)=>{
      state.loading=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setuserDetails,loginSuccess,startLogin} = userSlice.actions

export default userSlice.reducer