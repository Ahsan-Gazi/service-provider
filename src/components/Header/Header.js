import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
           {/* <NavLink to={/home}>Home</NavLink> */}

           <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Log In</NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/signup">Sign Up</NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/checkout">Check Out</NavLink>
        </nav>
    );
};

export default Header;