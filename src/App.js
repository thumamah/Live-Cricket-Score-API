import { useState } from 'react';
import './App.css';
import useEffect from 'react'
import Navbar from './components/Navbar';
import { getMatches } from './api';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './components/News';
import Home from './components/Home';
import LiveScore from './components/LiveScore';
import UseFetch from './components/UseFetch';
import FetchScore from './components/FetchScore';
import FetchPlayers from './components/FetchPlayers';
function App() {
  
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/News" 
              element={<News />} 
            />
            <Route 
              path="/LiveScore" 
              element={<LiveScore />} 
            />
            <Route 
              path="/UseFetch" 
              element={<UseFetch />} 
            />
            <Route 
              path="/FetchScore" 
              element={<FetchScore />} 
            />
             <Route 
              path="/FetchPlayers" 
              element={<FetchPlayers />} 
            />
            
           
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
