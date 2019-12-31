import React from './yolkjs'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 18
        }
    }
    handleClick = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                <h1>我今年{this.state.age}岁了</h1>
                <button onClick={this.handleClick}>长大了</button>
            </div>
        )
    }
}
export default React.transfer(App)