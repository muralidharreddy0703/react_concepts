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

   switchNameHandler = (newName) => {
     console.log("i was in onclick button ");

     this.setState({
       person: [
        {name:newName, age:25},
        {name:'Uday', age:20},
        {name:'Sushma SangiReddy', age: 22},
        {name:'Vishnu', age: 30}
      ]
     })
   }

   nameChangedHandler = (event) => {
    this.setState({
      person: [
       {name:"Muralidhar", age:25},
       {name:event.target.value, age:20},
       {name:'Sushma SangiReddy', age: 22},
       {name:'Vishnu', age: 30}
     ]
    })
   }

  render(){

    const style = {
      backgroundColor: 'Orange',
      border: '1px solid black',
      padding: '8px'
    }
    return (
      <div className="App">
         
           <h2>i am working as React.js developer</h2> 
            Learn React

            <br></br>
            <button style={style}
            onClick={ () => this.switchNameHandler("Muralidhar Reddy ")}>Switch Name</button>
           <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} 
           />
           <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
            changed={this.nameChangedHandler}
           />
           <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age}
           // clickme= {this.switchNameHandler.bind(this,"NickName sony")}
          
           />
           <Person 
            name={this.state.person[3].name} 
            age={this.state.person[3].age}
           />

        
      </div>
    );

  }
  
}

export default App;
