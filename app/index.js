import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory} from 'react-router' // 路由
import Root from './Root.jsx'
import './res/css/index.less'

//创建Store
const root = document.getElementById('app');
//Provider置于最顶层
ReactDOM.render(
    <Root history={browserHistory}></Root>
    , root);