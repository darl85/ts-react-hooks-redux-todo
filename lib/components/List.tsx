import * as React from 'react'
import Form from './Form'
import { useState } from 'react';
import TodoInterface from './../model/TodoInterface'
import { SetStateAction } from "react";

const List = () => {
  let initialTodos: TodoInterface[] = []

  const [todos, addTodo]: [TodoInterface[], SetStateAction<any>] = useState(initialTodos);

  return (
    <div className='TaskList'>
      <Form todos={todos} addTodo={addTodo} />

      <ul>
          {console.log(todos)}
          {todos.map((todo: TodoInterface, index) => {
              return <li key={index}>{todo.name}</li>
          })}
      </ul>
    </div>
  )
}

export default List
