
import './App.css';
import Navbar from './components/Navbar';
// import Naughty from './components/Newsview';
import News from './components/News';
import Heading from './components/Heading';
import React, { Component } from 'react'

export default class App extends Component {

  render() {
    
    return (
        <>

        <Navbar title = "The Trust Time "/>

        <Heading/>
        
        <News/>
        
        
        
        </>
    )
  }
}

