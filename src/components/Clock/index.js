import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMount() method called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    console.log('ComponentWillUnmount() method called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render() method called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
