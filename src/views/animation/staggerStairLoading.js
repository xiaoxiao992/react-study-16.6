import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './animation2.scss'

export class Animation2 extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    constructor(props) {
        super(props)
    }
    // 在生命周期做动画处理
    componentDidMount() {
        let loading = document.querySelector(".loading")
        let letters = loading.textContent.split("")
        loading.textContent = ""
        letters.forEach((letter, i) => {
          let span = document.createElement("span")
          span.textContent = letter;
          span.style.animationDelay = `${i / 5}s`
          loading.append(span)
        })
    }
    render() {
        return (
            <div className="loading">Loading</div>
        )
    }
}

export default Animation2
