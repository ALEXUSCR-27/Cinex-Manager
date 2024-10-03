import { Link } from "react-router-dom";
import './navbar.css'

export default function NavBar() {
    return (
        <nav>
            <Link to="http://localhost:3000/">
                <button className="button_home">HOME</button>
            </Link>
        </nav>
    );
}