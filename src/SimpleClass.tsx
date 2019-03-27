import React, { Component } from 'react';

interface Props {
  bar: string;
}

interface State {
  isClicked: boolean;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleClick}
          className={this.state.isClicked ? 'is-clicked' : 'unclicked'}
        />
        <div>{this.props.bar}</div>
      </div>
    );
  }
}
