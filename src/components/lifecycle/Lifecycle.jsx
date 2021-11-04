import React from 'react'
class Lifecycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.increaseCount = this.increaseCount.bind(this)
    console.log('constructor')
  }

  increaseCount() {
    console.log('increaseCount')
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  forceUpdate() {
    console.log('forceUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = this.state.count !== nextState.count
    console.log(`shouldComponentUpdate ${shouldUpdate}`)
    return shouldUpdate
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.increaseCount}>
          Increase
        </button>
        <br />
        <br />
        <button className="btn btn-info" onClick={this.forceUpdate}>
          Force Update
        </button>
      </div>
    )
  }
}

export default Lifecycle
