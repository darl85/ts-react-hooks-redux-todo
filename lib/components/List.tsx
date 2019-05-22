import * as React from 'react'
import Form from './Form'
import TodoInterface from './../model/TodoInterface'
import { useSelector } from 'react-redux'
import { TodoState } from "../state/State";

const List = () => {
  const state: TodoState = useSelector((state: TodoState) => state)

  return (
    <div className='TaskList'>
      <Form />

      list:
      <ul>
          {state.todos.map((todo: TodoInterface, index) => {
              return <li key={index}>{todo.name}</li>
          })}
      </ul>
    </div>
  )
}

export default List
