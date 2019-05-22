import TodoInterface from "../model/TodoInterface";
import { ADD_TODO, AddTodoAction } from "./ActionTypes";

export const AddTodo = (todo: TodoInterface): AddTodoAction => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};
