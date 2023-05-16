import React from 'react';

const Event = ({ event, cardFooterColor }) => {
   
    const bgCardFooter = `bg-${cardFooterColor}-500`
    console.log(bgCardFooter);
    const { img, event_title } = event || {};
    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            
            <div className={`card-body ${bgCardFooter}`}>
                <h2 className="card-title">{event_title}</h2>

            </div>
        </div>
    );
};

export default Event;