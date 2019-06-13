import {createStore, applyMiddleware, compose} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducer from "./reducers"
import { rootEpic } from './epics'

const epicMiddleware = createEpicMiddleware()

export const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk, epicMiddleware]

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store

epicMiddleware.run(rootEpic)