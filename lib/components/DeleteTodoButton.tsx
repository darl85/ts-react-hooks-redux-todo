import React from 'react'
import { useDispatch } from "react-redux";
import { DeleteTodo } from "../action/DeleteTodo";

const DeleteTodoButton = ({todoIndex}: {todoIndex: number}) => {

  const dispatch = useDispatch()
  const todoDeletingIndex: number = this.todoIndex

  let deleteTodo = (): void => {
    dispatch(DeleteTodo(todoIndex))
  }

  return (
      <a onClick={deleteTodo}>[x]</a>
  )
}

export default DeleteTodoButton
