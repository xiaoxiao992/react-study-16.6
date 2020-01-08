import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import matchPath from './matchPath.js'

// 创建一个上下文保持history、location等
const RouterContext = React.createContext()

// Router：管理历史记录变更，location变更等等
class BrowserRouter extends Component {
    constructor(props) {
        super(props)

        // 创建浏览器history对象
        this.history = createBrowserHistory(this.props)
        // 创建状态管理location
        this.state = {
            location: this.history.location
        }
        // 开启监听
        this.unlisten = this.history.listen(
            location => { 
                this.setState({ location });
            })
    }
    componentWillUnmount() {
        if(this.unlisten) {
            this.unlisten()
        }
    }
    render() {
        return (
            <RouterContext.Provider
                children={this.props.children || null}
                value={{
                    history: this.history,
                    location: this.state.location
                }}
            />
        )
    }
}

class Route extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const location = context.location
                        // 根据pathname获得match匹配
                        const match = matchPath(location.pathname, this.props)
                        // 要传递一些参数
                        const props = {...context, match}
                        // 
                        let { children, component, render } = this.props

                        if(Array.isArray(children) && children.length === 0) {
                            children = null
                        }
                        // 优先级最高的是children
                        if(children && typeof children === 'function') {
                            children = children(props)
                        }

                        return (
                            <RouterContext.Provider value={props}>
                                {children // children优先级最高，不论匹配与否存在就执行
                                    ? children
                                    : props.match // 后面的component和render必须匹配
                                    ? component // 若匹配,首先查找component
                                       ? React.createElement(component) // 若存在渲染之
                                       : render // 若render存在
                                       ? render(props) // 按render渲染结果
                                       : null
                                    : null
                                }
                            </RouterContext.Provider>
                        )
                    }
                }
            </RouterContext.Consumer>
        )
    }
}

export default class MyRouterTest extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/foo" component={() => <div>foo</div>}></Route>
                <Route path="/bar" component={() => <div>bar</div>}></Route>
            </BrowserRouter>
        )
    }
}
