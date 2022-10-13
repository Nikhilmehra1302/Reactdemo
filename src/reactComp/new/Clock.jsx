//React State And LifeCycle
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;
/*
class CounterComponenet extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.count}</h2>
        <button onClick={this.increase}>+</h2>
      </div>
    );
  }
}
export { CounterComponenet };
*/
