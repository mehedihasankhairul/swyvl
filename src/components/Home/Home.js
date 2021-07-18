import React from 'react';
import Community from '../Sections/Community/Community';
import ContactWithTeachers from '../Sections/ContactWithTeachers/ContactWithTeachers';
import LearnAndMeet from '../Sections/LearnAndMeet/LearnAndMeet';

const Home = () => {
    return (
        <div>
            <ContactWithTeachers />
            <LearnAndMeet />
            <Community />
        </div>
    );
};

export default Home;