import * as React from 'react'
import Form from './Form'
import TodoInterface from './../model/TodoInterface'
import { useSelector } from 'react-redux'
import { TodoState } from "../state/State";

const List = () => {
  const todos: TodoInterface[] = useSelector((state: TodoState) => state.todos)

  return (
    <div className='TaskList'>
      <Form />

      list:
      <ul>
          {todos.map((todo: TodoInterface) => {
              return <li key={todo.id}>{todo.name}</li>
          })}
      </ul>
    </div>
  )
}

export default List
