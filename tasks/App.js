import React, { Component } from 'react';

import tasks from './sample/task.json'

// componentes
import Tasks from './components/Tasks.js';
import Taskform from './components/taskForm.js';
import Post from './components/post.js'

class App extends Component{
  state = {
    tasks: tasks
  }

  recibirDato = (title, description) =>{
    const newTask = {
      title: title,
      description: description,
      id: (this.state.tasks.length + 1),
      done: false
    }
    this.setState({
      tasks: [... this.state.tasks, newTask]
    })
  }
  borrarTarea = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }
  checkTarea = (id) => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    });
    this.setState({tasks: newTask})
  }
  
  render(){
    return(
      <div>
        <Taskform addTask={this.recibirDato}/>
        <Tasks tasks={this.state.tasks} checkTarea={this.checkTarea} deleteTask={this.borrarTarea}/>
        <Post/>
      </div>
    );
  }
}

export default App;
