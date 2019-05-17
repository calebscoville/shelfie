import React from 'react';
// import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Dashboard></Dashboard>
        <Form></Form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
