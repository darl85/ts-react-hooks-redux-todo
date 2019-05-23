import {ADD_TODO, AddTodoAction, DELETE_TODO, DeleteTodoAction, TodoActionTypes} from "../action/TodoActionTypes";
import TodoInterface from "../model/TodoInterface";

export default function TodoReducer(todos: TodoInterface[] = [], action: TodoActionTypes): TodoInterface[] {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                (<AddTodoAction>action).payload
            ]
        case DELETE_TODO:
            return todos.filter((todo: TodoInterface): boolean => {
                return todo.id !== (<DeleteTodoAction>action).id
            })
        default:
            return todos
    }
}
