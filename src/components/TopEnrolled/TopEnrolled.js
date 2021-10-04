import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const TopEnrolled = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Top Enrolled courses from last 30 days.</Card.Title>
                    <div>
                        <ProgressBar striped variant="success" label={'Data Science'} now={40} />
                        <ProgressBar striped variant="info" label={'Javascript'} now={20} />
                        <ProgressBar striped variant="warning" label={'Digital Marketing'} now={60} />
                        <ProgressBar striped variant="danger" label={'Python'} now={80} />
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">3 minutes ago</Card.Footer>
            </Card>
        </div>
    );
};

export default TopEnrolled;