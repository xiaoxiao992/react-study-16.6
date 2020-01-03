import React, { useState, useEffect, useReducer } from 'react'

// 只展示水果列表
function FruitList({fruits, onSetFruit}) {
    return (
        <ul>
            {
                fruits.map(f => <li key={f} onClick={() => onSetFruit(f)}>{f}</li>)
            }
        </ul>
    )
}

// 声明输入组件
function FruitAdd(props) {
    // 输入内容状态及设置内容状态的方法
    const [pname, setPname] = useState('')
    // 键盘事件处理
    const onAddFruit = e => {
        if(e.key === 'Enter') {
            props.onAddFruit(pname)
            setPname('')
        }
    }
    return (
        <div>
            <input 
               type='text'
               value={pname}
               onChange={e => setPname(e.target.value)}
               onKeyDown={onAddFruit}
            />
        </div>
    )
}

// 添加fruit状态维护fruitReducer
// 理解为vuex里面的mutations
function fruitReducer(state, action) {
    switch(action.type) {
        case 'init':
            return action.payload
        case 'add':
            return [...state, action.payload]
        default:
            return state
    }
}
export default function HookTest() {
    // useState(initialState),接收初始状态，返回一个由状态和其更新函数组成的数组
    const [fruit, setFruit] = useState('')
    // const [fruits, setFruits] = useState(['苹果', '草莓', '香蕉', '梨'])
    // 默认一开始是空的
    // const [fruits, setFruits] = useState([])
    // 使用useReducer来重新写
    // 参数1是reducer
    // 参数2是初始值
    const [fruits, dispatch] = useReducer(fruitReducer, [])
    // 异步获取水果列表
    useEffect(() => {
        setTimeout(() => {
            // 更新fruits
            // 用useReducer dispath来派发
            dispatch({type: 'init', payload: ['香蕉','西瓜']})
            // setFruits(['香蕉','西瓜'])
        }, 1000)
    }, []) /* 如果没有任何依赖就传一个空数组，只执行一次，如果有依赖类似[fruit] 类似vue的watch */
    // 可以写多个副作用
    useEffect(() => {
        document.title = fruit
    }, [fruit])
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('msg')
        }, 1000)
        return function() {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            {/* <FruitAdd onAddFruit={pname => setFruits([...fruits, pname])} /> */}
            {/* 用dispatch来派发操作 */}
            <FruitAdd onAddFruit={pname => dispatch({type: 'add', payload: pname})} />
            <p>{fruit === '' ? '请选择喜欢的水果' : `您的选择是${fruit}`}</p>
            {/* 列表 */}
            <FruitList fruits={fruits} onSetFruit={setFruit} />
        </div>
    )
}

// 副作用钩子Effect Hook
// useReducer是useState的可选项，常用于组件有复杂状态逻辑时，类似于redux中reducer概念
