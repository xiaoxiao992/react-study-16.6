// redux原始的使用方式---redux中不支持异步操作
// createStore创建store
// reducer初始化、修改状态函数
// getState获取状态值
// dispatch提交更新
// subscribe变更订阅
// react-redux为了解决： 每次都重新调用render和getState太low，想用更react的方式来写

import {
    createStore,
    applyMiddleware,
    // 将更多reducer整合在一起
    combineReducers
} from 'redux'
// 中间件
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { counterReducer } from '../store/counter'


const store = createStore(
    // counterReducer,
    // 多个reducer组合在一起
    combineReducers({
        counter: counterReducer
    }),
    applyMiddleware(logger, thunk)
)

export default store