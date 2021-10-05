import React, { useContext } from 'react';
import { CourseContext } from '../../App';
import ContactUs from '../ContactUs/ContactUs';
import ViewCourses from '../ViewCourses/ViewCourses';
import WhatsBest from '../WhatsBest/WhatsBest';


const About = () => {
    const [learners, courses] = useContext(CourseContext);
    return (
        <div className="container">
            <div className="bg-image p-5 mb-3 rounded"
                style={{
                    backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
                    height: '200px'
                }}><h1>About us</h1>
                <h3>Learn from global experts and get certified by the world's leading</h3>
                <div className="d-flex justify-content-around">
                    <h5>Learners: <span style={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }}>{learners}</span></h5>
                    <h5>Courses: <span style={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }}>{courses}</span></h5>
                </div>
            </div>
            <WhatsBest />
            <ContactUs />
            <ViewCourses />
        </div>
    );
};

export default About;