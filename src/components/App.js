import React, { Component } from 'react';
import '../styles/App.css';
import Section from '../components/Section'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'




class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
