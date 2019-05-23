import {DELETE_TODO, TodoActionTypes} from "./TodoActionTypes"

export const DeleteTodo = (todoId: number): TodoActionTypes => {
    return {
        type: DELETE_TODO,
        id: todoId
    }
};
