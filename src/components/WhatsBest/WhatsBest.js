import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const WhatsBest = () => {
    const element = <FontAwesomeIcon icon={faPaw} />
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body className="d-flex bg-info rounded-pill">
                        <div >
                            {element}
                        </div>
                        <div>
                            <Card.Title>Top Trending Career-Path</Card.Title>
                            <Card.Text>
                                You can Start and finish one of these courses for free!---Only For Oneday.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="d-flex bg-success rounded-pill">
                        <div >
                            {element}
                        </div>
                        <div>
                            <Card.Title>Expert Instructor</Card.Title>
                            <Card.Text>
                                You can Start and finish one of these courses for free!---Only For Oneday.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card>

                    <Card.Body className="d-flex bg-primary rounded-pill">
                        <div >
                            {element}
                        </div>
                        <div>
                            <Card.Title>Lifetime Access</Card.Title>
                            <Card.Text>
                                You can Start and finish one of these courses for free!---Only For Oneday.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default WhatsBest;