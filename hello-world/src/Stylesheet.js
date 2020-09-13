import React from 'react';
import './Mystyle.css';

const Stylesheet = (props) => {
    let className=props.primary ? 'primary': ''
    
    return(
    <div>
    <h1 className={className}></h1>
    </div>
    )
    
   
};

export default Stylesheet;