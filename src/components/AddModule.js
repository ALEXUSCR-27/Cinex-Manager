import './style/components.css';
import NavBar from './NavBar';
import axios from 'axios';
import { useState } from 'react';

function AddModule() {

    const [titulo, setTitulo] = useState("");
    const [idioma, setIdioma] = useState("");
    const [director, setDirector] = useState("");
    const [fecha, setFecha] = useState("1901-01-01");
    const [genero, setGenero] = useState("");
    const [duracion, setDuracion] = useState(0);
    const [edad, setEdad] = useState(0);

    const registro = () => {
        if (validacion()) {
            axios.post("http://localhost:3307/agregarpeliculas", {
            titulo:titulo,
            idioma:idioma,
            director:director,
            fecha:fecha,
            genero:genero,
            duracion:duracion,
            edad:edad
            }).then((response) => {
                console.log(response);
                alert("SE REGISTRO UNA PELICULA DE FORMA EXITOSA!!")
                setTitulo("");
                setDirector("");
                setIdioma("");
                setFecha("1901-01-01");
                setGenero("");
                setDuracion(0);
                setEdad(0);
            });
        }
        else {
            alert("DEBE LLENAR TODOS LOS CAMPOS!!")
        }
            
            
    }

    const validacion = () => {
        return !(titulo == "" || idioma == "" || director == "" || genero == "" || duracion == 0 || edad == 0);
    }
    
    return (
        <div>
            <div className="operativeFont">
                <NavBar/>
                <div className="formsSquare">
                    <h2 style={{position:"absolute", top:"100px", left:"560px"}}>TITULO</h2>
                    <input className="input" value={titulo} onChange={(e) => {setTitulo(e.target.value)}} style={{position:'absolute', width:"250px", height:"50px", top:"170px", left:"480px"}}></input>

                    <h2 style={{position:"absolute", top:"100px", left:"940px"}}>IDIOMA</h2>
                    <input className="input" value={idioma} onChange={(e) => {setIdioma(e.target.value)}} style={{position:'absolute', width:"250px", height:"50px", top:"170px", left:"850px"}}></input>

                    <h2 style={{position:"absolute", top:"100px", left:"1280px"}}>DIRECTOR</h2>
                    <input className="input" value={director} onChange={(e) => {setDirector(e.target.value)}} style={{position:'absolute', width:"250px", height:"50px", top:"170px", left:"1210px"}}></input>

                    <h2 style={{position:"absolute", top:"250px", left:"560px"}}>FECHA</h2>
                    <input className="input" value={fecha} onChange={(e) => {setFecha(e.target.value)}} type='date' style={{position:'absolute', width:"250px", height:"50px", top:"320px", left:"480px"}}></input>

                    <h2 style={{position:"absolute", top:"250px", left:"940px"}}>GENERO</h2>
                    <select  className="selectGenre" onChange={(e) => {setGenero(e.target.value)}} style={{position:"absolute",top:"320px", left:"855px", textAlign:"center"}}>
                        <option></option>
                        <option>DRAMA</option>
                        <option>ACCION</option>
                        <option>COMEDIA</option>
                        <option>FANTASIA</option>
                        <option>SUSPENSO</option>
                        <option>TERROR</option>
                    </select>

                    <h2 style={{position:"absolute", top:"250px", left:"1280px"}}>DURACION</h2>
                    <input type='number' value={duracion} onChange={(e) => {setDuracion(e.target.value)}} style={{position:'absolute', width:"250px", height:"50px", top:"320px", left:"1210px"}}></input>

                    <h2 style={{position:"absolute", top:"400px", left:"880px"}}>EDAD REQUERIDA</h2>
                    <input type='number' value={edad} onChange={(e) => {setEdad(e.target.value)}} style={{position:'absolute', width:"250px", height:"50px", top:"480px", left:"852px"}}></input>

                    <button className="buttons" onClick={registro} style={{top: "600px", left:"830px"}}>AGREGAR</button>
                </div>
            </div>
        </div>
    );
}
export default AddModule;