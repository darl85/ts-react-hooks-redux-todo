import { ADD_TODO, AddTodoAction } from "../action/ActionTypes";
import { InitialState, TodoState } from "../state/State";

export function todoReducer(state = InitialState, action: AddTodoAction): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        default:
            return state
    }
}
