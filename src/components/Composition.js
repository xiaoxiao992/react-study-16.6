// 组合
import React from 'react'

// Dialog定义组件外观和行为
function Dialog(props) {
    // 这里props.children代表了标签内部内容----children就是一个合法的js表达式
    // 类似Vue的插槽
    return <div style={{border: '1px solid blue'}}>
                {props.children.def}
                <div>{props.children.footer}</div>
            </div>
}

function RadioGroup(props) {
   return (
        <div>
            {
                React.Children.map(props.children, radio => {
                    // 要修改虚拟dom，只能克隆它
                    // 参数1是克隆对象
                    // 参数2是设置的属性
                    return React.cloneElement(radio, {name: props.name})
                })
            }
        </div>
   )
}
function Radio({children, ...rest}) {
   return (
       <label>
           <input type='radio' {...rest} />
           {children}
       </label>
   )
}

export default function Composition() {
    return (
        <div>
            <Dialog>
                {/* <h1>组件复合</h1>
                <p>复合组件给你足够的敏捷去定义自定义组件的外观和行为</p> */}
                {/* 这里来做个具名插槽 */}
                {
                    {
                        def: (
                            <>
                                <h1>组件复合</h1>
                                <p>复合组件给你足够的敏捷去定义自定义组件的外观和行为</p>
                            </>
                        ),
                        footer: <button>确定</button>
                    }
                }
            </Dialog>
            {/* // 高阶应用
               // 如果props.children是jsx，此时他是不能修改的，只可读 */}
            <RadioGroup name='mvvm'>
               <Radio value='vue'>vue</Radio>
               <Radio value='react'>react</Radio>
               <Radio value='angular'>angular</Radio>
            </RadioGroup>
        </div>
    )
}

// 作用域插槽实现


