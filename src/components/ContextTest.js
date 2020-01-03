import React, { PureComponent } from 'react'

// 使用上下文Context
// 创建Context=>获取Provider和Consumer=>Provider提供值 =>Consumer消费值
// 1.创建上下文
const Context = React.createContext()
// 2、获取Provider和Consumer
// 相对独立的
const Provider = Context.Provider
const Consumer = Context.Consumer


// 创建child组件
// 原先没有被高阶的child
// function Child(props) {
//     return (
//     <button onClick={() => props.add()}>{props.counter}</button>
//     )
// }
// withConsumer高阶组件，它根据配置返回一个高阶组件
function withConsumer(Consumers) {
    return Comp => props => {
    return <Consumers>{value => <Comp {...value} />}</Consumers>
    }
} 
// 经过withConsumer(Consumer)返回的高阶组件包装，child获得了上下文中的值
const Child = withConsumer(Consumer)(function(props) {
    return (
        <button onClick={() => props.add()}>{props.counter}</button>
    )
})

export default class ContextTest extends PureComponent {
    // 声明状态
    state = {
        counter: 0
    }
    add = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <Provider value={{counter: this.state.counter, add: this.add}}>
                {/* <Consumer>
                    {value => <Child {...value} />}
                </Consumer>
                <Consumer>
                    {value => <Child {...value} />}
                </Consumer>
                <Consumer>
                    {value => <Child {...value} />}
                </Consumer> */}
                <Child />
                <Child />
                <Child />
            </Provider>
        )
    }
}
