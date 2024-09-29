import { expect, test } from 'vitest'

import { increment, initialState, reducer } from './counterSlice'

test('count should increment', () => {
  let state = initialState

  state = reducer(state, increment(1))
  expect(state).toEqual({ count: 1 })

  state = reducer(state, increment(1))
  expect(state).toEqual({ count: 2 })
  state = reducer(state, increment(1))
  state = reducer(state, increment(1))
  expect(state).toEqual({ count: 4 })
})