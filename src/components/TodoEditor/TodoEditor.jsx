import React, { Component } from 'react';
import { Button, FormTodo, Textinput } from '../TodoEditor/TodoEditorStyled';

export default class TodoEditor extends Component {
  state = { message: '' };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <FormTodo onSubmit={this.handleSubmit}>
        <Textinput
          placeholder="Describe your task"
          value={this.state.message}
          onChange={this.handleChange}
        ></Textinput>
        <Button type="submit">Add</Button>
      </FormTodo>
    );
  }
}
