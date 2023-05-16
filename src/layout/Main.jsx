import React from 'react';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/share/Navbar/Navbar';
import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div className='relative'>
            <Navbar ></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;