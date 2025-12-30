import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error=>', error);
        console.log('info=>', errorInfo);

        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) return <h2>{this.props.message}</h2>
        return this.props.children;
    }
}

export default ErrorBoundary