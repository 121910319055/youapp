// App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPlayPage from './components/VideoPlayPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/video/:videoId" component={VideoPlayPage} />
    </Router>
  );
}

export default App;
