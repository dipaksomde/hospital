import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todoAction'

const Todo = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
  return <>
    <input type="text" name="" id="" value={task} onChange={e=> setTask(e.target.value)} />
    <button onClick={e => dispatch(addTodo({task}))}>Add</button>
  </>
}

export default Todo