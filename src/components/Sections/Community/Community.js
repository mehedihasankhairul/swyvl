import React from 'react';
import './Community.css'

import startLearning from '../../../images/img-3.png';

const Community = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center lg:px-24 px-6 mx-auto relative lg:mt-40 -mt-30 mb-40 flex flex-col space-y-30">
            <div className="absolute mobileShadow lg:w-auto w-10/12">
                <img
                    className="img-fluid lg:w-50/12 PhoneImage"
                    src={startLearning} alt="" />
            </div>

        </div>
    );
};

export default Community;