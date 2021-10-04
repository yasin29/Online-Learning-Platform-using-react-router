import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import TeacherCard from '../TeacherCard/TeacherCard';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data.results))
    }, [])
    return (
        <div className="bg-light my-5 p-3">
            <h1>Meet Our Teachers</h1>
            {
                teachers.length && <Row xs={2} md={3} lg={4} className="g-4">
                    {
                        teachers.map(teacher => <TeacherCard key={teacher.id.value} teacher={teacher} />)
                    }
                </Row>
            }
        </div>
    );
};

export default Teachers;