import React from 'react'
import {Link} from 'react-router-dom';
// import './App.css';

const Nav = () => {



    
    
    return(
        <nav >
        <h3>Logo</h3>
        <ul className="nav-links" >
            <Link to='/'>
            <li className="A1" >Home Page</li>
            </Link>
            <Link to='/adddata'>
            <li>Add Data</li>
            </Link>
            <Link to='/editdata'>
            <li>Edit Data</li>
            </Link>
            <Link to='/showdata'>
            <li>Show Data</li>
            </Link>
            <Link to='/deletedata'>
            <li>Delete Data</li>
            </Link>
        </ul>
        </nav>
    )
}
export default Nav;