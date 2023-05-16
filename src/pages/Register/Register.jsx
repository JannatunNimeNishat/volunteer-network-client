import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { signIn } = useContext(AuthContext)
    const handleGoogleSingIn = (event) => {
        event.preventDefault()
        console.log('hello');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const description = form.description.value;
        const library = form.library.value;
        const newUser = {
            name, email, date, description, library
        }
        console.log(newUser);

       /*  signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            }) */

    }

    return (
        <div className='absolute top-20'>
            <div className=' min-h-[80vh] w-screen flex justify-center  '>

                <form onSubmit={handleGoogleSingIn} className='border lg:w-[570px]   px-8 py-5'>
                    <h3 className='text-4xl mt-5 font-bold'>Register as a Volunteer</h3>

                    <div className='mt-10 space-y-8'>
                        <input className='border-b-2 w-full' placeholder='Full Name' type="text" name="name" id="" />
                        <br />
                        <input className='border-b-2 w-full' placeholder='Email' type="email" name="email" id="" />
                        <br />
                        <input className='border-b-2 w-full' placeholder='Date' type="date" name="date" id="" />
                        <br />
                        <input className='border-b-2 w-full' placeholder='Description' type="text" name="description" id="" />
                        <br />
                        <input className='border-b-2 w-full' placeholder='Organize books at the library.' type="text" name="library" id="" />
                    </div>

                    {/*  <div className='border flex items-center py-2 px-3  mt-5 cursor-pointer rounded text-white text-center font-bold bg-sky-600 hover:bg-slate-300'>
                        <p className=''>Register</p>
                    </div> */}

                    <input className='w-full py-2 px-3  mt-5 cursor-pointer rounded text-white text-center font-bold bg-sky-600 hover:bg-sky-700' type="submit" value="Register" />


                    <p className='mt-3 text-center'>Already have an account ? <Link to='/login'>Login</Link></p>
                </form>


            </div>
        </div>
    );
};

export default Register;