import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import AddMovie from '../components/add_movie_screen/add_movie_screen.js';
import MainScreen from '../components/main_screen/main_screen.js';
import NavBar from '../components/navbar/navbar.js';
import SearchModule from '../components/manage_movies_screen/manage_movies_screen.js';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path = "/" element = {<MainScreen/>}/>
            <Route exact path = "/buscarpeliculas" element = {<SearchModule/>}/>
            <Route exact path = "/agregarpeliculas" element = {<AddMovie/>}/>
            <Route exact path = "/modificarpeliculas" element = {<SearchModule/>}/>
            <Route exact path = "/eliminarpeliculas" element = {<SearchModule/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
