import React from 'react';
import img from '../../images/entrolled.gif'
const Entrolled = () => {
    return (
        <div>
            <h1 className='bg-primary'>Successfully Entrolled!</h1>
            <h3>Lets Do It Together.</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Entrolled;