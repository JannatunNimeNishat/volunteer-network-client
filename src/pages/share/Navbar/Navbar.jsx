import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png'
import Banner from '../../Home/Banner/Banner';
import { AuthContext } from '../../../provider/AuthProvider';
const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = ()=>{
        logout()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const navItems = <>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/destination'>Destination</Link></li>
     <li><Link to='/Events'>Events</Link></li>
     <li><Link to='/Blog'></Link>Blog</li>
    </>
    return (
        <>
        <div className="navbar lg:text-white  font-bold px-8  lg:absolute">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                    
                        {navItems}
                       
                    </ul>
                </div>
                <Link to='/' className="btn  btn-ghost normal-case text-xl ">
                    <img className='w-20  lg:w-32' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 items-center">
                    {navItems}
                  
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? 
                    <Link onClick={handleLogOut} to='/' className="btn">Logout</Link>
                    :
                    <Link to='/login' className="btn">Login</Link>
                }
                <Link to='/admin' className="btn">Admin</Link>
            </div>
        </div>

        {/* benner */}
        {/* <Banner className='static lg:relative'></Banner> */}
        </>
    );
};

export default Navbar;