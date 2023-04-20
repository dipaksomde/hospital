import { ADD_TODO } from "../conststants/todoConstatns"

export const todoReducer = (state={todos : []}, {type, payload}) => {
    switch (type) {
        case ADD_TODO: return {
            todoAdded : true
        }
    
        default: return state
    }
}