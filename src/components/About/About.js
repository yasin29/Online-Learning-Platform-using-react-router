import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import ContactUs from '../ContactUs/ContactUs';
import WhatsBest from '../WhatsBest/WhatsBest';


const About = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }

    return (
        <div className="container">
            <div className="bg-image p-5 mb-3"
                style={{
                    backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
                    height: '200px'
                }}><h1>About us</h1>
            </div>

            <WhatsBest />
            <ContactUs />
            <div className="bg-image p-5 mb-3"
                style={{
                    backgroundImage: "url('https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg')",
                    height: '200px'
                }}><h1 style={{ color: 'seaGreen' }}>Start Today and get certified in Top Career-Path Courses
                </h1>
                <Button onClick={() => handleClick()} className="my-5 bg-info">View All Courses</Button>
            </div>
        </div>
    );
};

export default About;