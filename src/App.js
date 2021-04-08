import React from 'react';
import Header from './Components/Header/Header'
import RegisterLogin from './Components/RegisterLogin/RegisterLogin'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Personal Project</h1>
      <Header />
      <RegisterLogin />
    </div>
  );
}

export default App;
