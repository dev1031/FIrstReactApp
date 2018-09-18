import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'; // first person is random name but after 'from ' that is component/file_name;
class App extends Component {
  state ={
    persons: [
      { name: 'Max', age :28},
      { name: 'Dev', age : 20 },
      { name: 'Holy', age: 23 }

    ]
  }
  switchNameHandler = () =>{
    //console.log("Was Clicked!")
    //don't use  this.state.persons[0].name ="Chang".
    this.setState({ 
      persons: [
        { name: 'Jost', age :28},
        { name: 'Dev', age : 20 },
        { name: 'Holy', age: 32 }
  
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Jost', age :28},
        { name: event.target.value, age : 20 },
        { name: 'Holy', age: 32 }
  
      ]
    })

  }
  render() {
    const style ={
      backgroundColor : 'pink',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working</p>
        <button style ={ style } onClick = { this.switchNameHandler }> Switch Name</button>
        <Person name = { this.state.persons[0].name }  age ={ this.state.persons[0].age }/> 
        <Person name = { this.state.persons[1].name }  age ={ this.state.persons[1].age } changed ={ this.nameChangeHandler }> My hobbies: Racing</Person> 
        <Person name = { this.state.persons[2].name }  age ={ this.state.persons[2].age }/> 

      </div>
    );
    //When using class based components we will use this.props
    // Person is not a random name inside the div , This is same name as in line 3 'Person', <Person/> can be <Person></Person> both will give the same result. 
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'How are you'))//eqivalent of the upper part, both will give the same result 
    //state is special property, state will use when uses the class. 
  }
  
}

export default App;
