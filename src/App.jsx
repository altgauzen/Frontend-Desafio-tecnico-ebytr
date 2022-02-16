import React, { Component } from 'react';
import './App.css';
import AddTask from './components/addTask';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  createTask(event, newTask) {
    event.preventDefault();
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  render() {
    return (
      <AddTask onCreate={this.createTask} />
    );
  }
}

export default App;
