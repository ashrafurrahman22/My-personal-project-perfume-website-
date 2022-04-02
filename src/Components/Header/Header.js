import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <h2 className='name'>Al Haqqah</h2>
            <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
        </nav>
        </div>
    );
};

export default Header;