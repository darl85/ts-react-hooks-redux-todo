import React, {ChangeEvent, FormEvent, SetStateAction} from 'react'
import { useState } from 'react'
import TodoInterface from '../model/TodoInterface'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from "../action/AddTodo";
import {TodoState} from "../state/State";
import {IncreaseTodoIndex} from "../action/IncreaseTodoIndex";

const Form = () => {
  const [currentTodoName, setCurrentTodoName]: [string, SetStateAction<any>] = useState('')
  const currentIndex: number = useSelector((state: TodoState) => state.nextTodoIndex)

  const dispatch = useDispatch()

  let submitTask = (event: FormEvent): void => {
    event.preventDefault()
    let todo: TodoInterface = { id: currentIndex, name: currentTodoName }
    dispatch(IncreaseTodoIndex(currentIndex))
    dispatch(AddTodo(todo))
    clearInput()
  }

  let handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTodoName(event.target.value)
  }
  let clearInput = (): void => {
    setCurrentTodoName('')
  }
  let increaseIndex = (currentIndex: number): number => {
    console.log(currentIndex)
    return currentIndex + 1
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
