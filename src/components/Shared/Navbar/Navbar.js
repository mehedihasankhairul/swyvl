import React from 'react';
import Logo from '../../../images/LOGOSYMBOL-nav.svg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <img src={Logo} alt="" />
                    </span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;