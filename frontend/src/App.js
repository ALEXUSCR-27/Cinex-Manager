import MainScreen from './components/MainScreen.js';
import ManageModule from './components/ManageModule.js';
import AddModule from './components/AddModule.js';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path = "/" element = {<MainScreen/>}/>
            <Route exact path = "/buscarpeliculas" element = {<ManageModule/>}/>
            <Route exact path = "/agregarpeliculas" element = {<AddModule/>}/>
            <Route exact path = "/modificarpeliculas" element = {<ManageModule/>}/>
            <Route exact path = "/eliminarpeliculas" element = {<ManageModule/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
