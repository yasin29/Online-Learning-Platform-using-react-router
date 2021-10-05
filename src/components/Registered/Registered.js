import React from 'react';
import img from '../../images/registration.gif'
const Registered = () => {
    return (
        <div>
            <h1 className='bg-success p-5'> Successfully Registered</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Registered;