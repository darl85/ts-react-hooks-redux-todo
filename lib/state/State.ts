import TodoInterface from "./../model/TodoInterface"

export interface TodoState {
    todos: TodoInterface[],
    nextTodoIndex: number
}
