import axios from "axios"
import { ADD_TODO } from "../conststants/todoConstatns"

export const addTodo =  todoData => async (dispatch, getState) => {
    try {
        const {data} =  await axios.post("http://localhost:5000/todos", todoData)
        dispatch({type : ADD_TODO, payload : "todo added"})
    } catch (error) {
        
    }
}
// export const addTodo = async todoData => {
//     try {
//         const {data} =  await axios.post("http://localhost:5000/todos", todoData)
//     } catch (error) {
        
//     }
// }