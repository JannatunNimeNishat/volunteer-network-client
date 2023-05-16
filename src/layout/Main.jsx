import React from 'react';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/share/Navbar/Navbar';

const Main = () => {
    return (
        <div className='relative'>
            <Navbar className='absolute top-0 right-1'></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;