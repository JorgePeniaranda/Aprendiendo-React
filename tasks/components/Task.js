import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component{
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

  render(){
    const {task} = this.props;

    return(
        <p className='red' style={this.StyleCompleted()}>
            {this.props.task.title} - 
            {this.props.task.description} - 
            {this.props.task.done} - 
            {this.props.task.id}
            <input type="checkbox" onChange={this.props.checkTarea.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </p>
    );
  }
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}

/* const yellow = {background: 'yellow'}; */

const btnDelete = {
    fontSize: '2rem',
    background: '#ea2027',
    borderRadius: '50%',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer'
};

export default Task;