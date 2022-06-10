import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
    const [toogle, setToogle] = useState(false);
    const toogleHandler = () => {
        setToogle(!toogle)
    };
    return (
        <nav className="container">
            <div>
                <div className="hr"></div>
                <h1 className="title">powercloud</h1>
            </div>
            <ul className={toogle? "active" : ""}>
                <li>
                    <Link onClick={() => setToogle(false)} to="/">AUF EINEN BLICK</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/demo">Demo</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/eworld">Eworld</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/lösungen">Lösungen</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/partner">Partner</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/plattform">Plattform</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/kontakt">Kontakt</Link>
                </li>
                <li>
                    <Link onClick={() => setToogle(false)} to="/locations">Standorte</Link>
                </li>
            </ul>
            <div onClick={toogleHandler} className="toogle-button">
                <i className={toogle? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
}