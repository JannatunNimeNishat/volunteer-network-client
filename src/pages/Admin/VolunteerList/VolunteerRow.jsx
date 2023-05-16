import React from 'react';
import { FaTrash } from 'react-icons/fa';
const VolunteerRow = ({volunteer,handleVolunteerDelete}) => {
    
    const {_id,name,email,date,library} = volunteer || {} ;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{library}</td>
            <td onClick={()=> handleVolunteerDelete(_id)}><FaTrash className='h-5 w-5 text-red-500 mx-auto cursor-pointer' /></td>
        </tr>
    );
};

export default VolunteerRow;