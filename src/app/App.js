import MainScreen from '../components/MainScreen.js';
import SearchModule from '../components/SearchMovieForm.js';
import AddModule from '../components/AddMovieForm.js';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path = "/" element = {<MainScreen/>}/>
            <Route exact path = "/buscarpeliculas" element = {<SearchModule/>}/>
            <Route exact path = "/agregarpeliculas" element = {<AddModule/>}/>
            <Route exact path = "/modificarpeliculas" element = {<SearchModule/>}/>
            <Route exact path = "/eliminarpeliculas" element = {<SearchModule/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
