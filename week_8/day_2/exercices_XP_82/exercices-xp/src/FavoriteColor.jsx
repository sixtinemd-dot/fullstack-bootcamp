//exercice 2 and 3

import React from "react";

//exercice 3
class Child extends React.Component {
    componentWillUnmount() {
        alert("Component unmounted")
    }

    render() {
        return <h2>Hello World!</h2>
    }
}

//exercice 2
class FavoriteColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red",
            //exercice 3
            show: true
        }
    }

    //part I
    shouldComponentUpdate() {
        return true
    }

    //part II
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 2000)
    }

    componentDidUpdate() {
        console.log("after update")
    }
    
    //part III
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate')
        return null
    }

    changeColor = () => {
        this.setState({favoriteColor: "blue"})
    }

    //exercice 3
    deleteChild = () => {
        this.setState({show: false})
    }

    render() {
        return (
            <div>
                <h1>{this.state.favoriteColor}</h1>
                {/* exercice 3: render child if true */}
                {this.state.show && <Child />}
                {/* exercice 2 */}
                <button onClick={this.changeColor}>Change to blue</button>
                {/* exercice 3 */}
                <button onClick={this.deleteChild}>Delete</button>

            </div>
        )
    }
}

export default FavoriteColor