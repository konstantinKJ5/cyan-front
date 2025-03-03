import React from 'react';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../routes/Dashboard';


function App() {
    return (
    <div id='app'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
        <footer></footer>
      </div>
    );
  }

  export default App;
