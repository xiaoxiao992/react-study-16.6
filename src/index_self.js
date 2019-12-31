// 手写react
// import React from 'react'
// import ReactDOM from 'react-dom'
// 替换手写的部分
import React from './yolkjs'
import App1 from './App_self'
const ReactDOM = React

// 改成函数组件
function App(props) {
    const [count, setCount] = React.useState(1)
    return (
        <div>
            <h1>哈喽哈哈哈， {props.title}, {count}</h1>
            <button onClick={() => setCount(count + 1)}>累加</button>
            <p>开课吧</p>
            <a href="https://www.kaikeba.com">跳转</a>
            <hr />
            <App1 />
        </div>
    )
}

let element = <App title="开课吧" />

// let element = <div>
//     <h1 id='app'>手写react</h1>
//     <p>开课吧</p>
//     <a href="https://www.kaikeba.com">跳转</a>
// </div>
ReactDOM.render(element, document.getElementById('root'))


