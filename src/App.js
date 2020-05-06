import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
         
           <h2>i am working as React.js developer</h2> 
            Learn React
           <Person name="Murali" age="25" />
           <Person name="Uday" age="20" />
           <Person name="Sushma" age="24"> MY JOB: SOFTWARE ENGINEER</Person>
           <Person name="Swathi" age="23"/>
        
      </div>
    );

  }
  
}

export default App;
