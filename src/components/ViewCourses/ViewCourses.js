import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ViewCourses = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }
    return (
        <div className="bg-image p-3 mb-2 rounded"
            style={{
                backgroundImage: "url('https://www.dreamhost.com/blog/wp-content/uploads/2017/10/online_course-750x375.jpg')"
            }}><h1 className="bg-secondary rounded" style={{ color: 'white', opacity: 0.8 }}>Start Today and get certified in Top Career-Path Courses
            </h1>
            <Button onClick={() => handleClick()} className="my-5 bg-success">View All Courses</Button>
        </div>
    );
};

export default ViewCourses;