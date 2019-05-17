import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
    
    }
  }

  handlePostDashboard = () => {
    axios.get('/api/dashboard').then((res) => {
      this.setState({
        dashboard: res.data
      })
    })
  }

  handleGetForm = () => {
    axios.get('/api/form').then((res) => {
      this.setState({
        form: res.data
      })
    })
  }

  handlePostHeader = () => {
    axios.get('/api/header').then((res) => {
      this.setState({
        header: res.data
      })
    })
  }

  handleGetProduct= () => {
    axios.get('/api/product').then((res) => {
      this.setState({
        product: res.data
      })
    })
  }

  render() { 

  
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Dashboard></Dashboard>
        <Form></Form>
      </header>
    </div>
  );
}
}

export default App;
