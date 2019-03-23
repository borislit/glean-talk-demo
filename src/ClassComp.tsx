import React, { Component } from 'react';

interface Props {
  bar: string;
}

interface State {
  foo: string;
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'someId',
    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick} id={this.state.foo} />
        <div>{this.props.bar}</div>
      </div>
    );
  }
}
