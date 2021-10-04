import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const TopCart = (props) => {
    const { img, name, level } = props.course;
    return (
        <div>
            <Col>
                <Card className="bg-light">
                    <Card.Img className="d-block w-75 img-fluid mx-auto" style={{ height: '200px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Career Path: {name}</Card.Title>
                        <Card.Text>
                            Level: {level}
                        </Card.Text>
                    </Card.Body>
                    <Button className="w-50 mx-auto mb-3">Learn More</Button>
                </Card>
            </Col>
        </div>
    );
};

export default TopCart;