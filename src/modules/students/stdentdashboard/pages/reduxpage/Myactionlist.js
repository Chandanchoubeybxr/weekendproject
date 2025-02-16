import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  abc: 10,
}

export const actionlists = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.abc += 1
    },
    decrement: (state) => {
      state.abc -= 1
    }
  },
})

export const { increment, decrement } = actionlists.actions

export default actionlists.reducer