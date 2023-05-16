import React from 'react';
import banner from '../../../assets/images/Banner.png'
const Banner = () => {
    return (
        // <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")` }}>
        <div className="hero h-[80vh] " style={{ backgroundImage: `url("${banner}")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">I GROW BY HELPING PEOPLE IN NEED</h1>
                    {/* search */}
                    <div className="form-control w-full ">
                        <div className="input-group w-full  md:flex justify-center">
                            <input type="text" placeholder="Search…" className="input input-bordered w-3/6" />
                            <button className="btn btn-square w-1/6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
 

                </div>
            </div>
        </div>
    );
};

export default Banner;