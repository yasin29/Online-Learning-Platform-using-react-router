import React from 'react';
import { Card, Col, Button, Accordion } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CustomToggle from '../CustomToggle/CustomToggle';

const TopCart = (props) => {
    const { img, name, level, fee, instructor, company } = props.course;
    const history = useHistory();
    const handleClick = () => {
        history.push('/entrolled')
    }
    return (
        <div>
            <Col>
                <Card className="bg-light">
                    <Card.Img className="d-block w-75 img-fluid mx-auto" style={{ height: '200px' }} variant="top" src={img} />
                    <Card.Body style={{ height: '100px' }}>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            Level: {level}
                        </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="1">Learn More</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body> <p><b>Instructor: </b> {instructor}</p>
                                    <p><b>Course Fee: </b><span>$</span>{fee}</p>
                                    <p><b>Powered By: </b>{company}</p>
                                    <Button onClick={() => handleClick()} className="w-50 mx-auto mb-3 bg-danger"> Entroll Now</Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card>
            </Col>
        </div>
    );
};

export default TopCart;