import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
     person : [
       {name:'Murali', age:25},
       {name:'Uday', age:20},
       {name:'Sushma', age: 22},
       {name:'Vishnu', age: 30}
     ],
     otherState: 'some other state value'
   }

   switchNameHandler = () => {
     console.log("i was in onclick button ");

     this.setState({
       person: [
        {name:'Muralidhar Reddy', age:25},
        {name:'Uday', age:20},
        {name:'Sushma SangiReddy', age: 22},
        {name:'Vishnu Vardhan', age: 30}
      ]
     })
   }

  render(){
    return (
      <div className="App">
         
           <h2>i am working as React.js developer</h2> 
            Learn React

            <br></br>
            <button onClick={this.switchNameHandler}>Switch Name</button>
           <Person name={this.state.person[0].name} age={this.state.person[0].age} />
           <Person name={this.state.person[1].name} age={this.state.person[1].age} />
           <Person name={this.state.person[2].name} age={this.state.person[2].age}> MY JOB: SOFTWARE ENGINEER</Person>
           <Person name={this.state.person[3].name} age={this.state.person[3].age}/>
        
      </div>
    );

  }
  
}

export default App;
