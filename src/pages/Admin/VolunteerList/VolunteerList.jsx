import React, { useEffect, useState } from 'react';

import VolunteerRow from './VolunteerRow';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/volunteers')
        .then(res=>res.json())
        .then(data => setVolunteers(data))
    },[])
   
    const handleVolunteerDelete = (id)=>{
        console.log(id);
    }
    return (
        <div className=' min-h-[100vh]'>
            <h3 className='text-xl font-bold mt-6 ml-5'>Volunteer register list</h3>
            <div className='bg-[#F4F7FC] px-5 py-8 mt-5'>
                <div className='bg-white p-5 rounded-lg'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Registration data</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                               {
                                volunteers.map(volunteer => <VolunteerRow
                                    key={volunteer._id}
                                    volunteer={volunteer}
                                    handleVolunteerDelete={handleVolunteerDelete}
                                ></VolunteerRow>)
                               }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;