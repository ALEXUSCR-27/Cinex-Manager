
import React, { useState } from 'react';
import Modal from 'react-modal';
import {useTable} from "react-table";
import './manage_movies_screen.css'
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


    const setValues = (results) => {
        setActual(results);
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

    const columns = React.useMemo( () => [
        {
            Header:"ID",
            accessor:"peliculaID",
        },
        {
            Header:"TITULO",
            accessor:"titulo",
        }
    ],
    []
    );
    
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

    const handleRowClick = (row, value) => {
        setEstado(value);
        showModal(true);
        setValues(row.original);
        console.log("ID:", row.original);
        
    };

    return (
        <div>
            <Modal className= "resultModal" isOpen = {openModal}>
                <div>
                    <h1>DETALLES DE PELICULA</h1>
                </div>
                <div>
                    <h2 style={{position:'absolute', left:"70%"}}>GENERO</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute',top:"180px", left:"758px", textAlign:"center"}} value={actual.genero}></input>
                    
                    <h2 style={{position:'absolute', left:"30px"}}>IDENTIFICADOR:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute',top:"120px", left:"18%"}} value={actual.peliculaID}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"160px"}}>TITULO:</h2>
                    <input className="inputModal" disabled={estadoInput} onChange={(e) => {setTitulo(e.target.value)}} style={{position:'absolute', left:"11%", top:"177px"}} value={actual.titulo}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"220px"}}>DIRECTOR:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute', left:"13%", top:"237px"}} value={actual.director}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"280px"}}>IDIOMA:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute', left:"10%", top:"297px"}} value={actual.idioma}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"340px"}}>EDAD REQUERIDA:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute', left:"20%", top:"357px"}} value={actual.edadRequerida}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"400px"}}>FECHA DE ESTRENO:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute', left:"23%", top:"417px"}} value={actual.fechaEstreno}></input>

                    <h2 style={{position:'absolute', left:"30px", top:"460px"}}>DURACION:</h2>
                    <input className="inputModal" disabled={estadoInput} style={{position:'absolute', left:"15%", top:"477px"}} value={actual.duracionMin}></input>
                </div>
                <div>
                    <button className='buttons' style={{position: 'absolute', top:"85%", left:"37%"}} onClick={() => showModal(false)}>CERRAR</button>
                </div>
            </Modal>
            <div className="manage_movies_container">
                <div className="_movies_table_container">
                    <table className="_movies_table"  {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup)=> (
                                <tr {...headerGroup.getHeaderGroupProps()} className="_table_header">
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                        
                                    ))}
                                    <th>OPCIONES </th>
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return(
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                                
                                            </td>
                                        ))}
                                        <div style={{width:"400px"}}>
                                            <button className="resultButtons" onClick={() => handleRowClick(row, true)}>VER DETALLES</button>
                                            <button className="modifyButtons" onClick={() => handleRowClick(row, false)}>MODIFICAR</button>
                                            <button className="deleteButtons" onClick={() => handleRowDelete(row)}>ELIMINAR</button>
                                        </div>
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