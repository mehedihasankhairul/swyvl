import React from 'react';
import './ContactWithTeachers.css';
import LandingImage from '../../../images/LANDING-IMG__1.png';

const ContactWithTeachers = () => {
    return (
        <div className=" contact__section justify-content-center">
            <div className="container ">
                <div className=" d-flex row">
                    <div className="col-md-6 pb-5 mt-5 pt-5">
                        <h1 className=" content mt-5 pt-5  ">Put in contact with teachers</h1>
                        <p className="mt-5">Find the teacher for your chosen topic:</p>
                        <ul>
                            <li>
                                Languages
                            </li>
                            <li>
                                topic-1
                            </li>
                            <li>
                                topic-2
                            </li>
                            <li>
                                topic-3
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 contact__section--right mt-5">
                        <img
                            className="w-100 img-responsive"
                            src={LandingImage}
                            alt="Put in contact with teachers" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactWithTeachers;