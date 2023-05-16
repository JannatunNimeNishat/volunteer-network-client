import React from 'react';
import logo from '../../../assets/logos/logo.png'
import { FaPlus, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
    return (
        <div className='px-6 py-5  min-h-[100vh]'>
            <Link to='/'><img className='w-full' src={logo} alt="" /></Link>
            <div className='mt-10'>
                <Link to='volunteer'>
                    <p className='text-sky-600 flex items-center cursor-pointer'>
                        <FaUserFriends className='h-5 w-5 mr-1' />
                        Volunteer register list
                    </p>
                </Link>
                <p className='mt-5 flex items-center cursor-pointer'>
                    <FaPlus className='h-5 w-5 mr-2' />
                    Add event
                </p>

            </div>
        </div>
    );
};

export default LeftNavigation;