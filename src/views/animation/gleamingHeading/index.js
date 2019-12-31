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
        let heading = document.querySelector("h1.gleaming");
        let letters = heading.textContent.split("");
        heading.textContent = "";
        letters.forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${Math.floor((Math.random()*1000)+1)}ms`;
            // span.style.animationDelay = `${Math.floor(Math.random(1, 1000))}ms`;
            heading.append(span);
        });
    }

    render() {
        return (
            <h1 className="gleaming">fushigi no monogatari</h1>
        )
    }
}

export default index
