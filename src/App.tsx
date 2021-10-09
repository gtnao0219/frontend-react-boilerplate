import React from 'react'
import { useSelector } from 'react-redux'
import { actions, dispatch as _dispatch, State } from './ducks'

export const App: React.FC = () => {
  const count = useSelector((state: State) => {
    return state.count
  })
  const dispatch = _dispatch()
  return (
    <>
      {count}
      <button onClick={() => dispatch(actions.countDown())}>CountDown</button>
      <button onClick={() => dispatch(actions.countUp())}>CountUp</button>
    </>
  )
}
