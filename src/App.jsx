import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = ( ) => (
      <div className='container'>
          <Routes>
              <Route path="/"element={<Home />} />
             <Route path="/blog/:id"element={<Blog />} />
        </Routes>
    </div>
  );

export default App;

