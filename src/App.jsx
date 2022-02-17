import React, { Component } from 'react';
import './App.css';
//  import Img from 'react-image';
import AddTask from './components/addTask';
import Task from './components/Task';

import logoEbytr from './img/logoEbytr.png';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    this.loadTasksFromLocalStorage();
  }

  loadTasksFromLocalStorage() {
    let localStorageTasks = localStorage.getItem('tasks');

    if (localStorageTasks) {
      localStorageTasks = JSON.parse(localStorageTasks);
      this.setState({
        tasks: localStorageTasks,
      });
    }
  }

  createTask(newTask) {
    const { tasks } = this.state;
    const updatedTasks = [...tasks, newTask];
    this.setState({
      tasks: updatedTasks,
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      if (taskToUpdate.id === updatedTask.id) {
        taskToUpdate.hasFinished = updatedTask.hasFinished;
      }
      return taskToUpdate;
    });
    this.setState({
      tasks: updatedTasks,
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="todo-app">
        <img src={logoEbytr} alt="logotipo da empresa" className="todo-img" />
        <h1>Qual seu planejamento para hoje?</h1>
        <AddTask onCreate={this.createTask} />
        { tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            onUpdate={this.updateTask}
            onRemove={this.removeTask}
            hasFinished={task.hasFinished}
          />
        )) }
      </div>
    );
  }
}

export default App;
