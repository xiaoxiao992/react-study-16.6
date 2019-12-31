import React, { PureComponent } from 'react'
import './index.scss'

function Indexloading() {
    return (
        <div className="loading">Loading</div>
    )
}

export class Index extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let loading = document.querySelector(".loading");
        let letters = loading.textContent.split("");
        loading.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i / 5}s`;
            loading.append(span);
        });
    }
    render() {
        return <Indexloading  />
    }
}
export default Index
