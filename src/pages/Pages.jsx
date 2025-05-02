import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../common/header/Header';
import Home from '../components/home/Home';
import Footer from '../common/footer/Footer';
import PlantProtection from '../components/plant-protection/PlantProtection';
import Faq from '../components/faq/Faq';
import Labs from '../components/labs/Labs'; 
import About from '../components/about-us/About';
import AuthForm from '../components/authForm/AuthForm';
import Profile from '../components/profile/Profile';
 
const Pages = () => {
    return (
        <>
            <Header/>
           <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='plant-protection' element={<PlantProtection/>}/>
            <Route path='faq' element={<Faq/>}/>
            <Route path='labs' element={<Labs/>}/>
            <Route path='about-us' element={<About/>}/>
            <Route path='auth-form/:subpage?' element={<AuthForm/>}/>
            <Route path='profile/:action?' element={<Profile/>}/>
           </Routes>
           <Footer/>
        </>
    );
};

export default Pages;