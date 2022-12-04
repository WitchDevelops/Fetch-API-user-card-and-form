import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import Person1 from './Person1';
import Person2 from './Person2';

function App() {
  
  
  return (
    <>
    <Navbar />
    <div class="main">
      <Routes>
        <Route path="/" element={<Person1 />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/person2" element={<Person2 />}></Route>
      </Routes>

      
    </div>
    </>
  );
}

export default App;