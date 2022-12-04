import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import Person1 from './Person1';
import Person2 from './Person2';
import Person3 from './Person3';
import Person4 from './Person4';
import Person5 from './Person5';
import Person6 from './Person6';

function App() {
  
  
  return (
    <>
    <Navbar />
    <div class="main">
      <Routes>
        <Route path="/" element={<Person1 />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/person2" element={<Person2 />}></Route>
        <Route path="/person3" element={<Person3 />}></Route>
        <Route path="/person4" element={<Person4 />}></Route>
        <Route path="/person5" element={<Person5 />}></Route>
        <Route path="/person6" element={<Person6 />}></Route>
      </Routes>
      
    </div>
    </>
  );
}

export default App;