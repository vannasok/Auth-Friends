import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';

function App() {
   return (
      <div className='container'>
         <NavBar />
         <AppRouter />
      </div>
   );
}

export default App;
