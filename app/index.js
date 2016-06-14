import React from 'react'
import {render} from 'react-dom'
import App from './component/home.jsx'
import './res/css/index.less'

const root = document.getElementById('app');
//Provider置于最顶层
render(
    <App/>, root);