import React, { Component } from 'react'
import './index.scss'

// function 没有生命周期
export const AnimationReveal = () => {
    return (
        <div class="reveal">
            sword art online
        </div>
    )
}

export class Animation1 extends Component {
    constructor(props) {
        super(props)
    }
    // 做动画操作
    componentDidMount() {
        let duration = 0.8;
        let delay = 0.3;
        let revealText = document.querySelector(".reveal");
        let letters = revealText.textContent.split("");
        // 找到每个单词
        revealText.textContent = "";
        let middle = letters.filter(e => e !== " ").length / 2;
        letters.forEach((letter, i) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
          revealText.append(span);
        })
    }
    render() {
        return (
           <AnimationReveal />
        )
    }
}

export default Animation1