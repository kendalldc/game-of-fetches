import Portal from './portal';
import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
static contextType = Context

state={
    togglePortal: false,
    data:[]
}

componentDidMount(){
    let requestOne = "http://anapioficeandfire.com/api/characters/16"
    let requestTwo = "http://www.anapioficeandfire.com/api/houses/378"
    let requestThree = "http://www.anapioficeandfire.com/api/houses/229"
    let requestFour = "http://www.anapioficeandfire.com/api/houses/17" 
    let requestFive ="http://www.anapioficeandfire.com/api/characters/901"
    let requestSix = "http://www.anapioficeandfire.com/api/houses/362"
    let requestSeven = "http://www.anapioficeandfire.com/api/characters/232"




    let promiseOne= axios.get(requestOne)
    let promiseTwo= axios.get(requestTwo)
    let promiseThree= axios.get(requestThree)
    let promiseFour= axios.get(requestFour)
    let promiseFive= axios.get(requestFive)
    let promiseSix= axios.get(requestSix)
    let promiseSeven= axios.get(requestSeven)


    let test= Promise
    .all(promiseOne,promiseTwo,promiseThree,promiseFour,promiseFive,promiseSix,promiseSeven)
    .then(response => {console.log(response))
    let finalData=[]
    response.forEach(data =>)
    
}

togglePortal =() => this.setState({togglePortal: !this.state.togglePortal})

render(){
    let {state, exampleContextMethod}= this.context
    let {togglePortal} = this.state

    return(
      <div className='page' id='navbar'>
      <p>About</p>
     {console.log(state)}

     <button onClick={()=>exampleContextMethod()}>Context Button</button>

     <button onClick={this.togglePortal}>Portal Button</button>

     {togglePortal ? <Portal togglePortal={this.togglePortal}/> :''}
     </div>
  );
}


}


export default App;
