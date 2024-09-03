import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState((prevCount) => ({ count: prevCount + 1 }));
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}

export default Counter;
