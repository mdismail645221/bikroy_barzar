import React from 'react';
import AboutUs from '../../../components/AboutUs/AboutUs';
import Categories from '../../../components/Categories/Categories';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    return (
        <div>
           <Carosel></Carosel>
           <AboutUs></AboutUs>
           <Categories></Categories>
        </div>
    );
};

export default Home;