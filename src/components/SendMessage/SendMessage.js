import React from 'react';
import img from '../../images/msg.gif'

const SendMessage = () => {
    return (
        <div className="bg-info p-5" style={{ height: '550px' }}>

            <h1>Gotcha!</h1>
            <h3>Got your message. Will get back to you soon</h3>


            <img src={img} alt="" />
        </div>
    );
};

export default SendMessage;