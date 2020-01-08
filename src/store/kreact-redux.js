// react-redux原理
// react-redux 核心任务：
// 核心任务:属性映射、变更检测和刷新;实现一个Provider组件可以传递store
// 1、实现一个高阶函数工厂connect，可以根据传人状态映射规则函数和派发器映射规则函数映射需要的属性，可以处理变更检测和刷新任务
// 2、实现一个Provider组件可以传递store
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './kkb-redux'

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponent extends React.Component {
        static contextType = {
            store: PropTypes.object
        }
        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            const { store } = this.context
            store.subscribe(() => this.update())
            this.update()
        }
        update() {
            const { store } = this.context
            const stateProps = mapStateToProps(store.getState())
            const dispatchProps = bindActionCreators(mapDispatchToProps,
                store.dispatch)
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render() {
            return <WrapComponent {...this.state.props} />
        }
    }
}

// 构建react-redux的Provider
export class Provider extends React.Component{
    static childContextTypes = {
        store: PropTypes.object 
    }
    getChildContext() {
        return { store: this.store }
    }
    constructor(props, context) {
        super(props, context)
        this.store = props.store 
    }
    render() {
        return this.props.children
    }
}