import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countAction } from './store/slices/count.slice';
export default function App() {
  const dispatch = useDispatch();
  const countStore = useSelector(store => store.countStore)
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <p>Count Value: {countStore.value}</p>
      <button onClick={() => {
        dispatch(countAction.increment())
      }}>Tang</button>

      <button onClick={() => {
        dispatch(countAction.decrement())
      }}>Giam</button>
    </div>
  )
}
