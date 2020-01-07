import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    constructor(props) {
        super(props)
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }
    // 清理div
    componentWillUnmount() {
         document.body.removeChild(this.node)
    }

    render() {
        // 将createPortal参数1声明的jsx挂载到node上
        return createPortal((
            <div>
                {this.props.children}
            </div>
        ), this.node)
    }
}
