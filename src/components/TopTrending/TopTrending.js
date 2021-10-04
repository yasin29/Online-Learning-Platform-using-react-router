import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useCourses from '../../hook/useCourses';
import TopCart from '../TopCart/TopCart';

const TopTrending = () => {
    const [courses] = useCourses();
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }
    return (
        <div className="container">
            <h1>Our Top Trending Career Path</h1>
            {courses.length && <Row xs={2} md={3} lg={4} className="g-4">
                {courses.map(course => course.trend.includes("top") && <TopCart key={course._id} course={course} />)}
            </Row>}

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

export default TopTrending;