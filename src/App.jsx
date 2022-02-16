import React, { Component } from 'react';
import './App.css';
import AddTask from './components/addTask';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
  }

  createTask(event, newTask) {
    event.preventDefault();
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        { tasks.map((task) => (
          <h1>{task.title}</h1>
        )) }
      </>
    );
  }
}

export default App;
