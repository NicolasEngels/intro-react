import './App.css';
import React, { Component } from "react";
import { List } from "./component/List/List.js";
import { Input } from "./component/Input/Input.js";
import { Button } from "./component/Button/Button.js";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Read book", done: true },
      { id: 2, name: "Write letter", done: false },
      { id: 3, name: "Edit cover", done: false },
    ],
    todoText: "",
  };

  onChangeInput = (e) => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: "",
    }));
  };

  onChangeBox = (item) => {
    this.setState(({ todos }) => ({
      todos: todos.map((el) =>
        el.id === item.id ? { ...el, done: !el.done } : el
      ),
    }));
  };

  handleDel = (item) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((el) => el.id !== item.id),
    }));
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <>
        <h2>ToDo List:</h2>
        <Input value={todoText} onChange={this.onChangeInput} />
        <Button onClick={this.onSubmitTodo}>Submit</Button>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
        />
      </>
    );
  }
}

export default App;
