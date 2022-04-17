import React from 'react';
// import { NavLink } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
           {/* <NavLink to={/home}>Home</NavLink> */}

           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Log In</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/signup">Sign Up</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/checkout">Check Out</CustomLink>
        </nav>
    );
};

export default Header;