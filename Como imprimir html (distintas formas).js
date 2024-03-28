import React from 'react';
import './App.css';


function Component() {
  return (
    <div id='Component'>Hello Word</div>
  );
}
function App() {
  return (
    <div>Componente: <Component/><Component/><Component/></div>
  );
}
const App2 = () => <div>Componente: <Component/><Component/><Component/></div>;
class app extends React.Component{
  render(){
    return <div>Componente: <Component/><Component/><Component/></div>;
  }
}

export default App;
