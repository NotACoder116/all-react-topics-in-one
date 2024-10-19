import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }
  render() {
    if (this.state.hasError) {
        return <div>An Error Occured</div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary