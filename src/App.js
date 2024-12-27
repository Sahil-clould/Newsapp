import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar.js';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apikey={apikey} key='home' pageSize={12} country="in" category="" />} />
          <Route path='/politics' element={<News setProgress={setProgress} apikey={apikey} key='politics' pageSize={12} country="in" category="politics" />} />
          <Route path='/sport' element={<News setProgress={setProgress} apikey={apikey} key='sport' pageSize={12} country="in" category="sport" />} />
          <Route path='/buisness' element={<News setProgress={setProgress} apikey={apikey} key='buisness' pageSize={12} country="in" category="buisness" />} />
          <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={12} country="in" category="technology" />} />
          <Route path='/Entertainment' element={<News setProgress={setProgress} apikey={apikey} key='Entertainment' pageSize={12} country="in" category="Entertainment" />} />
          <Route path='/science' element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={12} country="in" category="science" />} />
          <Route path='/General' element={<News setProgress={setProgress} apikey={apikey} key='General' pageSize={12} country="in" category="General" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
