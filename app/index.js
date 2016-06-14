import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer/index.jsx'
import App from './container/home.jsx'
import './res/css/index.less'

//创建Store
const store = createStore(appReducer)
const root = document.getElementById('app');
//Provider置于最顶层
render(
    <Provider store={store}>
        <App/>
    </Provider>, root);