import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TeacherForm.css'
const TeacherForm = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/registered')
    }
    return (
        <div className="container p-2 mx-auto bg-secondary rounded" style={{ opacity: .7 }}>
            <form>
                <h3 style={{ color: 'white' }}>Registration for Apply</h3>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="text" required className="form-control" placeholder="First name" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="text" required className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="email" required className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="password" required className="form-control" placeholder="Enter new password" />
                </div>
                <div className="form-group w-50 mx-auto mb-3">

                    <input type="password" required className="form-control" placeholder="confirm password" />
                </div>
                <Form.Group className="mb-3 w-50 mx-auto text-start" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Control required placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Control required placeholder="State" />
                        </Col>
                        <Col>
                            <Form.Control required placeholder="Zip" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="position-relative mb-3  w-50 mx-auto">
                    <Form.Label>Add Photo</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                    />
                </Form.Group>
                <Form.Group style={{ color: 'white' }} className="position-relative mb-3 w-25 mx-auto">
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        id="validationFormik106"
                        feedbackTooltip
                    />
                </Form.Group>
                <button onClick={() => handleClick()} type="submit" className="btn btn-dark btn-lg btn-block bg-success">Register</button>
            </form>
        </div>
    );
};

export default TeacherForm;