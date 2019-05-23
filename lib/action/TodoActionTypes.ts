import TodoInterface from "../model/TodoInterface";

export const ADD_TODO: string = "ADD_TODO"
export const DELETE_TODO: string = "DELETE_TODO"
export const INCREASE_TODO_INDEX: string = "INCREASE_TODO"

export interface AddTodoAction {
  type: string
  payload: TodoInterface
}

export interface DeleteTodoAction {
  type: string
  id: number
}

export interface IncreaseTodoIndexAction {
  type: string
  index: number
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction

