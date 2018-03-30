import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducers from './reducer'
let store=createStore(reducers,applyMiddleware(logger))
export default store