import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import List from './components/List'
import { rootReducer } from "./reducer";

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()))
ReactDOM.render(<Provider store={store}><List /></Provider>, document.getElementById('root'))
