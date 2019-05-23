import TodoInterface from "../model/TodoInterface";
import {ADD_TODO, TodoActionTypes} from "./TodoActionTypes";

export const AddTodo = (todo: TodoInterface): TodoActionTypes => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};
