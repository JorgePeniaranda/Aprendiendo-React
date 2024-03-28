import React from 'react';
import './App.css';

class Component extends React.Component{
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(mytext, subtitle){
    if (this.state.show) {
      return(
        <div id='Component'>
          <h3>{this.props.subtitle}</h3>
          <button onClick={this.toggleShow.bind(this)}>Toggle Show</button>
          {this.props.mytext}
        </div>
      );
    }
    else{ 
      return(
        <div>    
          <h1>NO</h1>
          <button onClick={this.toggleShow.bind(this)}>Toggle Show</button>
        </div>
      )
    }
  }
}
function App() {
  return (
    <div>
      Componente:
      <Component mytext='a' subtitle='1'/>
      <Component mytext='b' subtitle='2'/>
      <Component mytext='c' subtitle='3'/>
    </div>
  );
}

export default App;
