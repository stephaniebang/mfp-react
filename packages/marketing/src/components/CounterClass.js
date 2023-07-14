import React from 'react';

export default class CounterClass extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const { cont } = this.state;

    return (
      <div className="mcf-counter" style={{ background: 'red' }}>
        <h3>
          Class component imported directly into host
        </h3>

        <span>Counter: {this.state.count}</span>

        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    );
  };
}
