import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export class index extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let loading = document.querySelector('.loading')
        let letters = loading.textContent.split('')
        letters.forEach((letter, i) => {
            let span = document.createElement('span')
            span.style.animationDelay= `${i / 10}s`
            loading.append(span)
        })
    }

    render() {
        return (
            <div className="loading">Loading</div>
        )
    }
}

export default index
