import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import store, {history} from "./store"
import './index.scss'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import Details from './components/Details'
import Alerts from './common/Alerts'
import * as serviceWorker from './serviceWorker'

const routes = (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
                <Router history={history}>
                    <div>
                        <NavBar />
                        <Alerts />
                        <Switch> 
                            <Route exact path="/" component={Home} />
                            <Route exact path="/movies" component={Movies} />
                            <Route path="/movies/:movieId" component={Details} />
                        </Switch>
                    </div>
                </Router>
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
