import React from 'react';
import LeftNavigation from '../pages/Admin/LeftNavigation/LeftNavigation';
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
    return (
        <div className='grid grid-cols-6 border '>
            <div className='col-span-1'>
                <LeftNavigation ></LeftNavigation>
            </div>
            <div className='col-span-5 '>
                <Outlet className=''></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;