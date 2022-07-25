import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';


const NavBar: FC = () => {
    return (
        <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <h1>Card Generator</h1>
            </Link>
            <Link to={'/saved-cards'} style={{textDecoration: 'none'}}>
                <button>🌟</button>
            </Link>
        </nav>

    );
};

export default NavBar;

