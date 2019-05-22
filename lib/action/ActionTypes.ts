import TodoInterface from "../model/TodoInterface";

export const ADD_TODO: string = "ADD_TODO";

export interface AddTodoAction {
    type: string
    payload: TodoInterface
}

