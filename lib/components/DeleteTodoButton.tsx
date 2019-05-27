import React from 'react'
import { useDispatch } from "react-redux";

const DeleteTodoButton = ({deleteTodo}: {deleteTodo: any}) => {
  return (
      <a onClick={deleteTodo}>[x]</a>
  )
}

export default DeleteTodoButton
