import '../Style/Menu.css';
import React from 'react';
import { Link } from "react-router-dom";
function Menu(){
    return(
    
        <div id="menuwrapper"> 
    
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3 className='menuitemstyle'>Hem</h3>
                    </Link> 
                    <Link to="solarium" style={{color: 'inherit', textDecoration: 'none' }}>
                        <h3 className='menuitemstyle'>Solariebäddar</h3>
                    </Link>
                    <Link to="produkter" style={{color: 'inherit', textDecoration: 'none' }}>
                        <h3 className='menuitemstyle'>Sololjor</h3>
                    </Link>
                    <Link to="contacts" style={{color: 'inherit', textDecoration: 'none' }}>
                        <h3 className='menuitemstyle'>Om oss</h3>
                    </Link>
            </div>

    );
}
export default Menu;