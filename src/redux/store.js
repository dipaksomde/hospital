import {createStore,combineReducers, applyMiddleware} from 'redux'
import { todoReducer } from './reducers/todoReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    tracker : todoReducer
})


const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store