import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="container">
            <div className="d-flex py-5 align-items-center justify-content-center text-center">
                <div>
                    <div className="header__top mt-5 ">
                        <h1> Meet, Network & <br />  Swap Skills </h1>
                        <p className="">A social platform where users can connect with like-minded individuals to trade <br /> their skills and time, for free. It’s tailored for professionals in the beauty, fitness, <br /> education and creative industries.</p>
                    </div>
                    <div className="header__bottom mt-5">
                        <h5 className="text-bold">Get the Latest New's</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;