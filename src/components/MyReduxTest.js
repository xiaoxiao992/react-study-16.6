import React, { Component } from 'react'
import { createStore, applyMiddleware } from '../store/kredux'

const counterReducer = function(state = 0, action) {
    const num = action.payload || 1
    switch(action.type) {
        case 'add':
            return state + num
        case 'minus':
            return state - num
        default:
            return state
    }
}

// 自定义中间件
function logger({dispatch, getState}) {
    // 返回真正中间件任务执行函数
    return dispatch => action => {
        // 执行中间件任务
        console.log(action.type + '执行了！！！')
        // 执行下一个中间件
        return dispatch(action)
    }
}
// redux-thunk实现
const thunk = ({getState}) => dispatch => action => {
    // thunk函数，处理函数action 类似asyncAdd
    if(typeof action === 'function') {
        // 如果是函数
        return action(dispatch, getState)
    }
    // 部署函数直接跳过
    return dispatch(action)
}

const store = createStore(counterReducer, applyMiddleware(logger, thunk))

export default class MyReduxTest extends Component {
    // 生命周期
    componentDidMount() {
        store.subscribe(() => {
            // 强制更新
            this.forceUpdate()
        })
    }

    render() {
        return (
            <div>
                {store.getState()}
                <button onClick={() => store.dispatch({type: 'add'})}>+</button>
                {/* dispatch一个函数 */}
                <button onClick={() => store.dispatch(function() {
                    setTimeout(() => {
                        store.dispatch({type: 'add'})
                    }, 1000)
                })}>dispatch 一个函数</button>
            </div>
        )
    }
}
