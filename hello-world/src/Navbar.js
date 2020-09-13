import React from 'react';
import './Mystyle.css';

const Navbar = () =>{
    return(
        <nav className=  "nav-wrapper red darken-3">
        <div className  = "container" >
                    <p className="brand-logo" >poker game</p>
                    <table  >
                    <tr>
                        <td>
                        <a  href="/" className="one" >Home</a>
                        </td>
                        <td>
                        <a href="/About" className="one">About</a>
                        </td>
                        <td>
                        <a href="/Contact" className="one">Contact </a>
                        </td>
                    </tr>
                    </table>
                    
                    
                    
        </div>
        </nav> 

    )
}
export default Navbar;