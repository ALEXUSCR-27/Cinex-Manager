import { Link } from 'react-router-dom';
import './main_screen.css';

function MainScreen() {
    return(
        <div>
            <div className="main_container">
                <div className='_title_container'>
                    <h1>CINEX CRUD OPERATIONS MANAGER</h1>
                </div>
                <div className="_options_container">
                    <Link to="http://localhost:3000/buscarpeliculas">
                        <button className='button_search_movie'>MANAGE MOVIES</button>
                    </Link>
                    <Link to="http://localhost:3000/agregarpeliculas">
                        <button className='button_add_movie'>ADD NEW MOVIE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;