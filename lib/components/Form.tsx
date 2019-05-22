import React, {ChangeEvent, FormEvent, SetStateAction} from 'react'
import { useState } from 'react'
import TodoInterface from '../model/TodoInterface'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from "../action/AddTodo";

const Form = () => {
  const [currentTodoName, changeCurrentTodoName]: [string, SetStateAction<any>] = useState('')
  const dispatch = useDispatch()

  let clearInput = (): void => {
      changeCurrentTodoName('')
  }

  let submitTask = (event: FormEvent): void => {
    event.preventDefault()
    let todo: TodoInterface = { name: currentTodoName }
    dispatch(AddTodo(todo))
    clearInput()
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
