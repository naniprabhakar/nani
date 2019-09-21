/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prabhakar</h1>
        <h2>Suresh</h2>
        <h2>Ashok</h2>
        <h1>Raju</h1>
  
               
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a>
      </header>
    </div>
  );
}

export default App;
*/

import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';  
import { SSL_OP_SINGLE_DH_USE } from 'constants';

class App extends React.Component{
    render() 
    {
      return ( <div className="App">

          <Header/> 
          <Content/> 
      </div>
    );
  }
}
class Header extends Component{
  render()
  {
    var myStyle={
      color:'black',
      fontSize:35,
      backgroundColor:'red'
    };
    return( <div className="App-head" >
      <h1 style={myStyle} >this is my header component</h1>
      <p  style={myStyle}>welcome to react</p>
   
    </div>

    );
  }
}
class Content extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          "id":1,
          "name":"foo",
          "age":"35"
        },
        
        {
          "id":2,
          "name":"bar",
          "age":"25"
        },

    {
      "id":3,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":4,
          "name":"bar",
          "age":"25"
        },

    {
      "id":5,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":6,
          "name":"bar",
          "age":"25"
        },

    {
      "id":7,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":8,
          "name":"bar",
          "age":"25"
        },

    {
      "id":9,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":10,
          "name":"bar",
          "age":"25"
        },

    {
      "id":11,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":2,
          "name":"bar",
          "age":"25"
        },

    {
      "id":3,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":2,
          "name":"bar",
          "age":"25"
        },

    {
      "id":3,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":2,
          "name":"bar",
          "age":"25"
        },

    {
      "id":3,
      "name":"zoooo",
      "age":"45"
  }
  ,
        
        {
          "id":2,
          "name":"bar",
          "age":"25"
        },

    {
      "id":3,
      "name":"zoooo",
      "age":"45"
  }
      ]
    };
  }
  render(){
    var myStyle={
      color:'blue',
      fontSize:35,
      backgroundColor:'yellow'
    };
    return ( <div>
      <h1 style={myStyle}>this is content of my webpage</h1>
      <p style={myStyle}>welcome to the varun simha it solutions</p>
    <table>
      <thead>
                 <th>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            
          </th>
          <br></br>
          <tbody>
            {this.state.data.map((person,i) => <TableRow key={i} data={person}/>)}
        </tbody>
      </thead>
    </table>
        </div>
        );
  }
}  
class TableRow extends Component{
  render(){
     return( 
      <tr>
       <td>{this.props.data.id}</td> 
       <td>{this.props.data.name}</td> 
       <td>{this.props.data.age}</td> 
      </tr>
    );
  }
}
{/*  

class App extends Component{
  constructor(props){
    super(props);
  
    this.state={
      headerText:"welcome to react",
      headerContext:"in this lecture will go over it"
    };
  }
  render(){
    return ( <div className="App">
      <h1>{this.state.headerText}</h1>
      <p>{this.state.headerContext}</p>
    </div>

    );
  }
}

*/}

{/* 
class App extends Component{

 
  render(){
  
    
    return ( <div className="App">

         <Header/> 
         <Content/> 



    </div>

    );
  }
}

class Header extends Component{
  render(){
    var myStyle={
      color:'black',
      fontSize:35,
      backgroundColor:'red'
    };

    return( <div className="App-head" >
      <h1 style={myStyle} >this is my header component</h1>
      <p  style={myStyle}>welcome to react</p>
    </div>

    );
  }

}

class Content extends Component{

  render(){
    var myStyle={
      color:'blue',
      fontSize:35,
      backgroundColor:'yellow'
    };

    return ( <div>
      <h1 style={myStyle}>this is content of my webpage</h1>
      <p style={myStyle}>welcome to the varun simha it solutions</p>
    </div>

    );
  }
}  

*/}













{/*
class App extends Component
{
  render(){

    var myStyle={
      color:'red',
      fontSize:35
    };

    return ( <div> <h1>this is used to develop webpage</h1>

      <p>this is my paragraph</p>

      <b>this is bold tag</b>
      <marquee style={myStyle}><b>this is used scrol something </b> </marquee>

    </div>


    );
  }
}

*/ }











{/*

class App extends Component
{
  render(){
    return <h1>hi how are you </h1>
  
  }
}

*/}









{/*
class App extends Component
{
      render(){
        var myStyle={
          fontSize:36,
          color:'red'
        }

        var my={

          border:'solid',
          borderRadius:150,
          borderColor:'red',
          fontSize:36,
          color:'green'
          
        }



        var i =10;
        var b ="vishnu"
        var c ="ashok"

        var h = 15;
        return ( <div>  <body> hi this is my react app</body>
          
          
          
          <h1 style={myStyle}>hi how are you {2+2*3}this is for additon:{3+3} </h1>

               {2*9}

               <h1 style={my}>{i === 1 ? 'True!' : 'False!'} this is my answer</h1>  

                <h1 style={my}>{b==="ashok"?'true':'false'}</h1>

                <h1 style={my}>{c==="ashok"?'true':'false'}</h1>
                <h4 style={my}>this is h4 tag is used</h4>

                <p style={my}>{h%2===0?'EvenNumber':'Oddnumber'}</p>
                <p>FullName:<input type="text"></input> </p> 
        <p><input type="submit" value="submit"></input> </p> 

        <input type="button" value=" please press the button "  onClick="onclick"></input>

          


        </div>

        

        );



      }
}  */}
export default App;
