import React from 'react';
import Hero from './hero/Hero';
import Team from './team/Team';
import Interview from './interview/Interview';
import Labsdemo from './labs/Labsdemo';

const Home = () => {
    return (
        <>
            <Hero/>
            <Team/>
            <Labsdemo/>
            <Interview/>
           
            
        </>
    );
};

export default Home;