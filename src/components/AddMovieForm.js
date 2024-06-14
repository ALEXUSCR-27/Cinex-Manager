import '../styles/components.css';
import '../styles/movies_form.css';

import NavBar from './NavBar';
import { useState } from 'react';

import { addMovie } from '../services/movies';

function AddMovieForm() {

    const [director, setDirector] = useState("");
    const [running_time, setDuracion] = useState(0);
    const [mpa_age, setEdad] = useState(0);
    const [release_date, setFecha] = useState("1901-01-01");
    const [genre, setGenero] = useState("");
    const [language, setIdioma] = useState("");
    const [title, setTitulo] = useState("");

    const clean_form = () => {
        setTitulo("");
        setDirector("");
        setIdioma("");
        setFecha("1901-01-01");
        setGenero("");
        setDuracion(0);
        setEdad(0);
    }

    const add_movie = () => {

        const movie = {
            title:title,
            language:language,
            director:director,
            release_date:release_date,
            genre:genre,
            running_time:running_time,
            mpa_age:mpa_age,
        }

        if (attr_validation()) {
            const request_reponse = addMovie(movie);
            
            if (request_reponse.status === 200) {
                alert("SE REGISTRO UNA PELICULA DE FORMA EXITOSA!!")
                clean_form();
            }
        }

        else {
            alert("DEBE LLENAR TODOS LOS CAMPOS!!")
        }
                
    }

    const attr_validation = () =>  {
        return !(title === "" || language === "" || director === "" || genre === "" || running_time === 0 || mpa_age === 0);
    }
    
    return (
        <main>
            <div className="addMovie">
                <NavBar/>
                <div className="addMovie__container">
                    <div className="addMovie__container_formBox">
                        <div className="formBox_forms">
                            <div className="formBox_form">
                                <label for="title">Titulo</label>
                                <input id="title" name="title" value={title} onChange={(e) => {setTitulo(e.target.value)}} ></input>
                            </div>
                            <div className="formBox_form">
                                <label for="language">Idioma</label>
                                <input id="language" name="language" value={language} onChange={(e) => {setIdioma(e.target.value)}} ></input>
                            </div>
                            <div className="formBox_form">
                                <label for="director">Director</label>
                                <input id="director" name="director" value={director} onChange={(e) => {setDirector(e.target.value)}} ></input>
                            </div>
                            <div className="formBox_form">
                                <label for="release_date">Fecha</label>
                                <input id="release_date" name="release_date" value={release_date} onChange={(e) => {setFecha(e.target.value)}} type='date'></input>
                            </div>
                            <div className="formBox_form">
                                <label for="genre">Genero</label>
                                <select id="genre" name="genre" onChange={(e) => {setGenero(e.target.value)}} >
                                    <option></option>
                                    <option>DRAMA</option>
                                    <option>ACCION</option>
                                    <option>COMEDIA</option>
                                    <option>FANTASIA</option>
                                    <option>SUSPENSO</option>
                                    <option>TERROR</option>
                                </select>
                            </div>
                            <div className="formBox_form">
                                <label for="running_time">Duracion</label>
                                <input id="running_time" name="running_time" type='number' value={running_time} onChange={(e) => {setDuracion(e.target.value)}} ></input>
                            </div>
                            <div className="formBox_form">
                                <label for="mpa_age">Edad Requerida</label>
                                <input id="mpa_age" name="mpa_age" type='number' value={mpa_age} onChange={(e) => {setEdad(e.target.value)}} ></input>
                            </div>
                        </div>
                        <div className="formBox_buttons">
                            <button onClick={add_movie}>Registrar pelicula</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default AddMovieForm;