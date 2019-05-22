import TodoInterface from "./../model/TodoInterface"

export interface TodoState {
    todos: TodoInterface[]
}

export const InitialState: TodoState = {
    todos: []
};
