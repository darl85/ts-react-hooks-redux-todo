import * as React from 'react'
import Form from './Form'
import TodoInterface from './../model/TodoInterface'
import {useDispatch, useSelector} from 'react-redux'
import { TodoState } from "../state/State";
import DeleteTodoButton from "./DeleteTodoButton";
import {DeleteTodo} from "../action/DeleteTodo";

const List = () => {
  const todos: TodoInterface[] = useSelector((state: TodoState) => state.todos)
  const dispatch = useDispatch()

  let deleteTodo = (todoIndex: number): void => {
    dispatch(DeleteTodo(todoIndex))
  }

  return (
    <div className='TaskList'>
      <Form />

      list:
      <ul data-testid="list">
          {todos.map((todo: TodoInterface) => {
              return <li key={todo.id}>{todo.name} <DeleteTodoButton deleteTodo={() => deleteTodo(todo.id)} /></li>
          })}
      </ul>
    </div>
  )
}

export default List
