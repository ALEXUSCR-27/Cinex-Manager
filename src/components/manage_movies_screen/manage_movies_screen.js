
import React, { useState } from 'react';
import './manage_movies_screen.css'
import MovieModal from './movie_modal';
import { searchMovies, deleteMovie } from '../../services/movies';

function SearchModule() {
    
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [actual, setActual] = useState([]);
    const [estadoInput, setEstadoInput] = useState(false);


    const [titulo, setTitulo] = useState("");
    const [idioma, setIdioma] = useState("");
    const [fecha, setFecha] = useState("1901-01-01");
    const [genero, setGenero] = useState("");

    const [id, setID] = useState(0)
    const [director_modal, setDirector_modal] = useState("");
    const [running_time_modal, setDuracion_modal] = useState(0);
    const [mpa_age_modal, setEdad_modal] = useState(0);
    const [release_date_modal, setFecha_modal] = useState("1901-01-01");
    const [genre_modal, setGenero_modal] = useState("");
    const [language_modal, setIdioma_modal] = useState("");
    const [title_modal, setTitulo_modal] = useState("");
    


    const setValues = (results) => {
        setActual(results);

        setID(results.peliculaID)
        setDirector_modal(results.director);
        setDuracion_modal(results.duracionMin);
        setEdad_modal(results.edadRequerida);
        setFecha_modal(results.fechaEstreno);
        setGenero_modal(results.genero);
        setIdioma_modal(results.idioma);
        setTitulo_modal(results.titulo);
    }

    const setEstado = (value) => {
        setEstadoInput(value);
    }

    const setRes = (values) => {
        setData(values);
    }

    const showModal = (value) => {
        setOpenModal(value);
    }

    const busqueda = async () => {
        setRes([]);
        const movieAttr = {
            titulo:titulo,
            idioma:idioma,
            fecha:fecha,
            genero:genero,
        }

        const request_response = await searchMovies(movieAttr);
        if (request_response.status === 200) {
            setRes(request_response.data[0])
        }
    }

    const handleRowDelete = async (row) => {
        const movieID = {peliculaID:row.original.peliculaID}
        const request_reponse = await deleteMovie(movieID);
        if (request_reponse.status === 200) {
            alert("LA PELICULA CON EL ID "+row.id+" FUE ELIMINADA DE FORMA EXITOSA!!");
            window.location.reload(true);
        }
    }


    const handleRowClick = (val, value) => {
        setEstado(value);
        showModal(true);
        setValues(val);
        console.log("ID:", val);
        
    };

    return (
        <div>
            <MovieModal 
                open={openModal} 
                flag={estadoInput} 
                onClose={() => showModal(false)}

                title={title_modal}
                language={language_modal}
                genre={genre_modal}
                mpa_age={mpa_age_modal}
                running_time={running_time_modal}
                release_date={release_date_modal}
                director={director_modal}
                id={id}

                onChange_director={setDirector_modal}
                onChange_duration={setDuracion_modal}
                onChange_age={setEdad_modal}
                onChange_release_date={setGenero_modal}
                onChange_language={setIdioma_modal}
                onChange_genre={setGenero_modal}
                onChange_title={setTitulo_modal}
            />
            <div className="manage_movies_container">
                <div className="_movies_table_container">
                    <table className="_movies_table">
                        <thead>
                            <tr className='_table_tr'>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th style={{width:"400px"}}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{val.peliculaID}</td>
                                        <td>{val.titulo}</td>
                                        <td>
                                            <div className='_options_buttons_container'>
                                                <button className="resultButtons" onClick={() => handleRowClick(val, true)}>View Details</button>
                                                <button className="modifyButtons" onClick={() => handleRowClick(val, false)}>Modify</button>
                                                <button className="deleteButtons" onClick={() => handleRowDelete(val)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="_form_container">
                        <div className='_inputs_container'>
                            <div className="_input_group">
                                <label for="title">Title</label>
                                <input 
                                    id="title" 
                                    name="title" 
                                    onChange={(e) => {setTitulo(e.target.value)}}
                                ></input>
                            </div>
                            <div className="_input_group">
                                <label for="language">Language</label>
                                <input 
                                    id="language" 
                                    name="language"
                                    onChange={(e) => {setIdioma(e.target.value)}}
                                ></input>
                            </div>

                            <div className="_input_group">
                                <label for="genre">Genre</label>
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
                            <div className="_input_group">
                                <label for="release_date">Release Date</label>
                                <input
                                    id="release_date" 
                                    name="release_date" 
                                    onChange={(e) => {setFecha(e.target.value)}} 
                                    type='date'
                                ></input>
                            </div>
                        
                        </div>
                        <div className='_button_container'>
                            <button 
                                className="_search_button" 
                                onClick={busqueda}
                            >BUSCAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchModule;