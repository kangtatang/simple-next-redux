// pages/index.js

import { useSelector, useDispatch } from 'react-redux'

const Todo = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Todo
