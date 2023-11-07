import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import NavigationBar from './Components/NavigationBar';
import SignUpForm from './Components/SignUpForm';
import Leaderboard from './Components/NavigationBar/Leaderboard'

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/account" element={<SignUpForm />} />
          {/* <Route path="/review" element={<Review />} /> */}
           <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(<App/>, document.getElementById('root')); 

export default App;
