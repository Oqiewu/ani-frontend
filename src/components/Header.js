import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/anime">Аниме</Link>
                <Link to="/wiki">Википедия</Link>
                <Link to="/profile">Профиль</Link>
            </nav>
        </header>
    );
}

export default Header;
