import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import {PushNotification} from './firebase';

function App() {
PushNotification();
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/easy" element={<Quiz level='easy' questions={10}/>}/>
        <Route path="/medium" element={<Quiz level='medium' questions={10}/>}/>
        <Route path="/Hard" element={<Quiz level='hard' questions={10}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
