import React, { Component } from 'react'
// import store from '../store'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../store/counter'

// 参数1: mapStateToProps = (state) => {return {num: state}}
// 参数2: mapDispatchToProps = dispatch => {return {add: () => dispatch({type: 'add'})}}
// connect两个任务：
// 1：自动渲染
// 2：映射到组件属性
@connect(
    state => ({ num: state.counter }),
    {
        // 声明两个函数
        // add: () => ({type: 'add'}), // action creator,
        // 传参
        // 同步返回的是对象
        // 把这些都提取到store/counter中
        // add: (num) => ({type: 'add', payload: num}),
        // // 等同于
        // // add: () => dispatch({type: 'add'})
        // minus: () => ({type: 'minus'}),
        // // 异步的返回的是函数
        // asyncAdd: () => dispatch => {
        //     // 异步调用在这里
        //     // 类似ajax处理
        //     setTimeout(() => {
        //         dispatch({type: 'add'})
        //     }, 1000)
        // }
        add,
        minus,
        asyncAdd
    }
)
class ReduxTest extends Component {
    // 未使用了react-redux时，使用方式
    // componentDidMount() {
    //     // store订阅状态变更
    //     store.subscribe(() => {
    //         // 强制更新
    //         this.forceUpdate()
    //     })
    // }
    
    render() {
        return (
            <div>
                {/* {store.getState()} */}
                {this.props.num}
                <div>
                    {/* <button onClick={() => store.dispatch({type: 'add'})}>+</button>
                    <button onClick={() => store.dispatch({type: 'minus'})}>-</button> */}
                    <button onClick={() => this.props.add(2)}>+</button>
                    <button onClick={this.props.minus}>-</button>
                    <button onClick={this.props.asyncAdd}>+</button>
                </div>
            </div>
        )
    }
}

export default ReduxTest

