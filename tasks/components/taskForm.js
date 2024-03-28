import React, { Component } from 'react';

export default class taskForm extends Component{


  state = {
    title: '',
    description: ''
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.title)
  }
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render(){
    return(
        <form onSubmit={this.onSubmit}>
            <input type='text' name='title' placeholder='INSERTA TAREA' onChange={this.onChange} value={this.state.title}/>
            <br/>
            <textarea name='description' onChange={this.onChange} value={this.state.description}/>
            <br/>
            <input type='submit'/>
        </form>
    );
  }
}