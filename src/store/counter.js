export const add = (num) => ({type: 'add', payload: num})
// 等同于
// add: () => dispatch({type: 'add'})
export const minus = () => ({type: 'minus'})
// 异步的返回的是函数
export const asyncAdd = () => dispatch => {
    // 异步调用在这里
    // 类似ajax处理
    setTimeout(() => {
        // dispatch可以多个
        dispatch({type: 'add'})
    }, 1000)
}

export const counterReducer = function(state = 0, action) {
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