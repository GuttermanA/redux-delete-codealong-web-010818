import React, { Component } from 'react';

class Todo extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  handleOnClick = () => {

    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    });
  }

  render() {
    return (
      <li>
        {this.props.text}
        {this.props.id}
        <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Todo
