import React from 'react';
import './LearnAndMeet.css';
import LandingImage2 from '../../../images/LANDING-IMG__2.png';

const LearnAndMeet = () => {
    return (
        <div className="learn__and__meet">
            <div className="container">
                <div className="d-flex row">
                    <div className="col-md-6 mb-5">
                        <img
                            className="w-100"
                            src={LandingImage2}
                            alt="Start to learn and meet people" />
                    </div>
                    <div className="col-md-6 container mt-5">
                        <h1>Start to learn and meet people</h1>
                        <p>This text is a placeholder, we will change the text when we get the second survey, this can be a couple more of lines.
                        </p>
                        <h5>This is also a placeholder for a claim or catch phrases</h5>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LearnAndMeet;