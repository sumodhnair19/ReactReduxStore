import * as React from 'react';
import './App.css';
import  logo  from './logo.svg';
import Form from './components/form.js';
import  Loader  from './components/common.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppLogo/>
        <Loader/>
        <Form/>
      </div>
    );
  }
}

function AppLogo() {
 return(
 <div className="App-logo">
  <img alt="app-logo" src={logo}/>
 </div>
 );
}

export default App;
