import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { todoReducer } from './reducer/Todos';
import List from './components/List'

const store = createStore(todoReducer);
ReactDOM.render(<Provider store={store}><List /></Provider>, document.getElementById('root'))
