import React, { useState, useEffect } from 'react';
import './App.css';
import { Credentials } from './Credentials';
import NavigationBar from './Components/NavigationBar';
import Body from './Components/Body';
import axios from 'axios';

function App(props) {
  const spotify = Credentials();
  const [token, setToken] = useState('');

  return (
    <div className="App">
      <NavigationBar />
      <Body />
    </div>
  );
}

export default App;
