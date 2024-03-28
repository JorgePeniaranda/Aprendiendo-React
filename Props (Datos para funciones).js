import React from 'react';
import './App.css';


function Component(props) {
  return (
    <div id='Component'>{props.mytext} <br></br><br></br>Hello Word</div>
  );
}
function App() {
  return (
    <div>Componente: 
      <Component mytext="Hello World"/>
      <Component mytext="Hola Mundo"/>
      <Component mytext="Hello"/></div>
  );
}

export default App;
