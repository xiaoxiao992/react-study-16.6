import React, { Component, Fragment } from 'react';

const THemeContext = React.createContext('light')
// 在函数中引入组件
export function withTheme(Component) {
    // 然后返回另一个组件
    return function ThemedComponent(props) {
        // 最好使用context theme渲染这个被封装组件
        // 注意我们照常引用了被添加的属性
        return (
            <THemeContext.Consumer>
                {theme => <Component {...props} theme={theme} />}
            </THemeContext.Consumer>
        )
    }
}
function Button({theme, ...rest}) {
    return <button className={theme} {...rest} />
}
const ThemeButton = withTheme(Button)
export default ThemeButton
