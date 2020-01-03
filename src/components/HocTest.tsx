// 高阶组件
import React from 'react'

// 定义一个function
/**
 * 保证功能单一，它不关心数据来源，只负责显示
 * @param {* 数据来源} props 
 */
function Lesson(props) {
    return (
        <div>
            {props.stage} - {props.title}
        </div>
    )
}

// 模拟数据
const lessons = [
    {stage: 'React', title: '核心API'},
    {stage: 'React', title: '组件化1'},
    {stage: 'React', title: '组件化2'}
]
// 定义高阶组件withContent
// 包装后的组件传人参数，根据改参数获取显示数据
// 工厂函数
const withContent = Comp => props => {
  const content = lessons[props.idx]
  return <Comp {...content} />
}
// withLog高阶组件，能够在组件挂载时输出日志
const withLog = Comp => {
    // 为了有生命周期
    return class extends React.Component {
            componentDidMount() {
                console.log('didMount', this.props)
            }

            render() {
                return <Comp {...this.props}></Comp>
            }
        }
    }
// withContent 双箭头由来
// function withContent(Comp) {
//     return props => {
//         const content = lessons[props.idx]
//         return <Comp {...content} />
//     }
//     // 在原始
//     // return function(props) {
//     //     const content = lessons[props.idx]
//     //     return <Comp {...content} />
//     // }
// }
// 包装
const LessonWithContent = withLog(withContent(Lesson))
// 装饰器语法 @withLog 装饰器只能用在class上
// 重构上面的Lesson
// 先后顺序，从下往上
// CRA项目中默认不支持js代码使用装饰器语法，可修改后缀名为tsx则可以直接支持
@withLog
@withContent
class Lesson2 extends React.Component {
    render() {
        return (
            <div>
                {this.props.stage} - {this.props.title}
            </div>
        )
    }
}


export default function HocTest() {
    return (
        <div>
           {
                [0,0,0].map((item, idx) => (
                    // <LessonWithContent key={idx} idx={idx} />
                    // 调整成如下
                    <Lesson2 key={idx} idx={idx} />
                ))
           }
        </div>
    )
}
