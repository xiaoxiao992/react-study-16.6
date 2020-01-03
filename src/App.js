import React, { Component } from 'react'
import {Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import RouteWithSubRoutes from './common/routeWithSubRoutes'
import routes from './routes/index.js'
import ContextTest from './components/ContextTest'
import HocTest from './components/HocTest.tsx'
import Composition from './components/Composition'
import HookTest from './components/HookTest'

class App extends Component {
    render() {
        return (
            <Router>
                {/* 上下文传值 */}
                <ContextTest />
                <HocTest />
                {/* 组件复合 */}
                <Composition />
                {/* Hooks */}
                <HookTest />
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