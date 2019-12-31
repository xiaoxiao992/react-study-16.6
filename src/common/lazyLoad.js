import React, { Component } from 'react'

export default function lazyLoad(Componentfn) {
    class LazyloadComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }
        // 即将dom加载完毕
        async componentWillMount() {
           const { default: component } = await Componentfn()
           this.setState({component})
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    return LazyloadComponent
}

