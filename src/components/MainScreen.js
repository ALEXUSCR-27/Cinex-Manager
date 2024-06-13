import { Link } from 'react-router-dom';
import '../styles/components.css';
import NavBar from './NavBar';

function MainScreen() {
    return(
        <div>
            <div className="principalFont">
                <NavBar/>
                <div className="moviesSquare"></div>
                <div className="crudSquare">
                    <h1 style={{position:'absolute',top:"50px"}}>GESTOR DE PELICULAS</h1>
                    <Link to="http://localhost:3000/buscarpeliculas">
                        <button className="buttons" style={{top:"300px", left:"200px"}}>GESTIONAR PELICULAS</button>
                    </Link>
                    
                    <Link to="http://localhost:3000/agregarpeliculas">
                        <button className="buttons" style={{top:"400px", left:"200px"}}>AGREGAR PELICULA</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default MainScreen;