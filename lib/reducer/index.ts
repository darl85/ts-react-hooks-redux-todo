import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import TodoIndexReducer from './TodoIndexReducer'

export const rootReducer = combineReducers({
    todos: TodoReducer,
    nextTodoIndex: TodoIndexReducer
});
