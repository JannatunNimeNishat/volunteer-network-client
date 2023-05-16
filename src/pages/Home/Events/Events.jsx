import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res=>res.json())
        .then(data => setEvents(data))
    },[])
    const randomColor = ()=>{
        const colors = ['red', 'emerald', 'blue', 'orange', 'yellow','orange','violet', 'fuchsia', 'sky', 'cyan'];
        return colors[Math.floor(Math.random()*10)]
    }
    
    return (
        <div className='my-container mt-[-100px]'>
            <div className='grid grid-cols-4 gap-6'>
            {
                events.map((event) => (<Event
                    key={event._id}
                    event={event}
                    cardFooterColor = {randomColor()}
                    ></Event>)
                )
            }
            </div>
        </div>
    );
};

export default Events;