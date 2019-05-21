import React, {ChangeEvent, FormEvent, SetStateAction} from 'react'
import { useState } from 'react'
import TodoInterface from '../model/TodoInterface'

interface FormProps {
  todos: TodoInterface[],
  addTodo: SetStateAction<any>
}

const Form = ({todos, addTodo}: FormProps) => {

  const [currentTodoName, changeCurrentTodoName] = useState('')

  let submitTask = (event: FormEvent): void => {
    event.preventDefault()
    let todo: TodoInterface = { name: currentTodoName }
    addTodo([...todos, todo])
    changeCurrentTodoName('')
  }

  let handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changeCurrentTodoName(event.target.value)
  }

  return (
      <form onSubmit={submitTask}>
        <label>
          Name:
          <input type="text" value={currentTodoName} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default Form
