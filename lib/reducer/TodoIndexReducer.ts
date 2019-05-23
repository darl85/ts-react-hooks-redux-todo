import { INCREASE_TODO_INDEX, IncreaseTodoIndexAction } from "../action/TodoActionTypes";

export default function TodoIndexReducer(index: number = 1, action: IncreaseTodoIndexAction): number {
    switch (action.type) {
        case INCREASE_TODO_INDEX:
            return index + 1
        default:
            return index
    }
}
