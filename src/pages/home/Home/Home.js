import React from 'react';
import AboutUs from '../../../components/AboutUs/AboutUs';
import Categories from '../../../components/Categories/Categories';
import LaptopHeroSection from '../../LaptopHeroSection/LaptopHeroSection';
import MoonTech from '../../MoonTech/MoonTech';
import SubmitForm from '../../SubmitForm/SubmitForm';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    return (
        <div className='mt-20'>
           <Carosel></Carosel>
           <AboutUs></AboutUs>
           <Categories></Categories>
            <LaptopHeroSection/>
           <MoonTech/>
           <SubmitForm/>
        </div>
    );
};

export default Home;