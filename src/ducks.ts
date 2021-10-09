import { useDispatch } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

export interface State {
  count: number
}
const initialState: State = {
  count: 0,
}

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    countUp: (state) => {
      state.count = state.count + 1
    },
    countDown: (state) => {
      state.count = Math.max(0, state.count - 1)
    },
  },
})

export const actions = slice.actions
export const store = configureStore({
  reducer: slice.reducer,
})
export const dispatch = () => useDispatch<typeof store.dispatch>()
export const reducer = slice.reducer
