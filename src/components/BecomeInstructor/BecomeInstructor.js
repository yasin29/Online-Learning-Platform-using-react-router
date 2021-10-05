import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
const BecomeInstructor = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/registration")
    }
    return (
        <div className="bg-image p-5 mb-3 "
            style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: "url('https://miro.medium.com/max/2000/0*EpckQb9WE2b6kWWI')",
                height: '400px'
            }}><h1 className="fw-bolder" style={{ color: 'seaGreen' }}>Become an Instructor
            </h1>
            <h5 className="text-light fw-bold bg-secondary" style={{ opacity: .7 }}>Top instructors from around the world teach thousands of students on InfoTech Career-Path. We provide the tools and skills  to teach what you love</h5>
            <Button onClick={() => handleClick()} className="my-5 bg-danger">Start Teaching Today</Button>
        </div>
    );
};

export default BecomeInstructor;