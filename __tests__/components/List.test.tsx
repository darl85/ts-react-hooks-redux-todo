import React from 'react'
import {createStore, Store, StoreCreator} from 'redux'
import {Provider, connect} from 'react-redux'
import {render, fireEvent, cleanup} from 'react-testing-library'
import { rootReducer } from "../../lib/reducer";
import List from "../../lib/components/List";

afterEach(cleanup)

function renderWithRedux(
    ui: any,
    store: Store = createStore(rootReducer)
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
}

test('can render todos list', () => {
    const store = createStore(() => ({todos: [{name: 'wtf', id: 1}]}))
    const {getByTestId, getByText} = renderWithRedux(<List />, store)

    expect(getByText('wtf')).toBeTruthy()
})

test('delete todo', () => {
    const store = createStore(() => ({todos: [{name: 'wtf', id: 1}]}))
    const {getByTestId, getByText} = renderWithRedux(<List />, store)

    console.log(getByText('[x]'))

    fireEvent.click(getByText('[x]'))

    expect(getByTestId('list')).toBeFalsy()
})
