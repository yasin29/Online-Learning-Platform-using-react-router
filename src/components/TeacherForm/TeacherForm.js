import React from 'react';
import './TeacherForm.css'
const TeacherForm = () => {
    return (
        <div>
            <form>
                <h3>Registration for Apply</h3>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group w-50 mx-auto mb-3">

                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="no">log in?</a>
                </p>
            </form>
        </div>
    );
};

export default TeacherForm;