import React,{Component} from "react"
import ReactDOM from "react-dom"
import App from "./app.jsx"
import {Provider} from 'react-redux'
import store from './store/store'
import './static/fonts/iconfont.css'
import './static/css/react.css'
import fontSize from './utils/fontSize.js'
import './static/css/common.css'

// ReactDOM.render(<h1>sdasdasd</h1>,document.getElementById("root"))
ReactDOM.render(
    <Provider store={store}>
         <App></App>

    </Provider>,
     document.getElementById("root")
    )