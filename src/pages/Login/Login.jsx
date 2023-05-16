import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const { googleSingUp } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        console.log('google');
        googleSingUp()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (

        <div className='absolute top-20'>
            <div className=' min-h-[80vh] w-screen flex justify-center  '>

                <div className='border lg:w-[570px] lg:h-[457px] text-center px-5 flex flex-col justify-center'>
                    <h3 className='text-4xl mt-5 font-bold'>Login with</h3>
                    <div onClick={handleGoogleLogin} className='border flex items-center py-2 px-3 rounded-xl mt-5 cursor-pointer hover:bg-slate-300'>
                        <FaGoogle className='h-6 w-6' />
                        <p className='flex-1 '>Continue with Google</p>
                    </div>
                    <p className='mt-3'>Don't have an account ? <Link >Create an account</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;