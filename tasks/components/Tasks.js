import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component{
  render(){
    return(
        this.props.tasks.map(task => <Task task={task} key={task.id} checkTarea={this.props.checkTarea} deleteTask={this.props.deleteTask}/>)
    );
  }
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Tasks;