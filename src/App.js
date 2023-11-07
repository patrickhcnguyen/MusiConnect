import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import NavigationBar from './Components/NavigationBar';
import SignUpForm from './Components/SignUpForm';
import Leaderboard from './Components/NavigationBar/Leaderboard';

const Home = () => {
  return(
    <div>
      <NavigationBar/>
      <Body/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/account" element={<SignUpForm />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
