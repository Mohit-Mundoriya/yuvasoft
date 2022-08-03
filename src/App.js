import React, { Component } from 'react';
import './App.css';
import Student from './Student';

const App = () => {
  return (
    <div>
      <Student  name="Rahul"/>
      <Student name="Sacin" />
      <Student name="Sky" />
   
    </div>
  )
}

 
// class App extends Component {
//   render() {
//     return React.createElement("h1", null, "Hello World")
//   }
// }


export default App;
