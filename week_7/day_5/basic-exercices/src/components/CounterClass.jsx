import {Component} from 'react'

class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
    }

    handleClick = () => {
    console.log("click")
    this.setState({count: this.state.count + 1})
}
    render() {
        return (
            <div>
                <h2>COUNTER CLASS - count = {this.state.count}</h2>
                <button onClick={() => this.handleClick()}>+</button>
            </div>
        )
    }

}

export default CounterClass