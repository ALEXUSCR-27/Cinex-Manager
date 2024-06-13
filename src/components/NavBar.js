import { Link } from "react-router-dom";
import './style/components.css';

export default function NavBar() {
    return (
        <nav className="NavBar">
            <a className="logo" href="http://localhost:3000/" ></a>
            <Link to="http://localhost:3000/">
                <button className="navButton" style={{position:'absolute', left:"25%", top:"23px"}}>INICIO</button>
            </Link>
        </nav>


    );
}