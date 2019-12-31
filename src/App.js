import React, { Component } from 'react'
import {Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import RouteWithSubRoutes from './common/routeWithSubRoutes'
import routes from './routes/index.js'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map(route => (
                            <RouteWithSubRoutes {...route} key={route.path} />
                        ))
                    }
                    <Redirect from="/" exact to="/home" />
                    <Redirect from="/*" to="/error" />
                </Switch>
               
            </Router>
        )
    }
}
export default App