import React from 'react';
import Clock from './components/Clock'
import Todolist from './components/Todolist'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Todolist/>
    </div>
  );
}

export default App;
