import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState:{
    value: false
  },
  reducers: {
    toTrue: (state) => {
      state.value = true
    },
    toFalse: (state) => {
      state.value = false 
    },
  },
})

export const { toTrue, toFalse } = contactSlice.actions

export default contactSlice.reducer