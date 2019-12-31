import React, { PureComponent } from 'react'
import './staggerSquareLoading.scss'

// function squarelist() {

// }

export class StaggerSquareLoading extends PureComponent {
    constructor(props) {
        super(props)
    }
    // dom加载完毕时
    componentDidMount() {
        
    }
    render() {
        const length = 16
        return (
            // 用循环来做这部分
            <div className="loader">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        )
    }
    
}
export default StaggerSquareLoading