// 添加一个bindActionCreators能转换actionCreator为派发函数，redux.js
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}
export function bindActionCreators(creators, dispatch) {
    return Object.keys(creators).reduce((ret, item) => {
       ret[item] = bindActionCreator(creators[item],dispatch) 
       return ret
    }, {})
}