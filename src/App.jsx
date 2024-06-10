import React from 'react';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import Context from './Utills/Context';
import Context2 from './Utills/LocalStorageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shelf_container from './Components/Shelf_container';


function App ()  {
  return (
    <Router>
    <Context>
    <Context2>    
          <div className='w-full'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Container />} />
              <Route path='/shelf' element={<Shelf_container />} />
            </Routes>
          </div>
    </Context2>
    </Context>
        </Router>
  );
};

export default App;