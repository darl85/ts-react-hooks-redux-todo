import { INCREASE_TODO_INDEX, IncreaseTodoIndexAction } from "./TodoActionTypes"

export const IncreaseTodoIndex = (todoId: number): IncreaseTodoIndexAction => {
    return {
        type: INCREASE_TODO_INDEX,
        index: todoId
    }
};
