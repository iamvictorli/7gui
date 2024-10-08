import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

export const initialState: CounterState = {
  count: 0,
} satisfies CounterState as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const incrementBy = action.payload
      state.count += incrementBy
    },
  },
  selectors: {
    selectCount: state => state.count,
  },
})

export const { name, reducer } = counterSlice

const { actions, selectors } = counterSlice
export const { increment } = actions
export const { selectCount } = selectors
