import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const SliderHome = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }
    const element = <FontAwesomeIcon icon={faSignInAlt} />
    return (
        <div className="mx-auto " style={{ display: 'block', width: '80%', padding: 30 }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '450px' }}
                        src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/07/hero2x-768x288.jpg"
                        alt=""
                    />
                    <Carousel.Caption>
                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>
                            <h3>Online Degrees</h3>
                            <p>Study Flexibly Online</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click for All Career Path Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '450px' }}
                        src="https://hackr.io/blog/best-web-development-courses/thumbnail/large"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>

                            <h3>Learn new skills</h3>
                            <p>With  flexible courses</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click for All Career Path Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '450px' }}
                        src="https://miro.medium.com/max/1024/1*6l15igU_z2Uj15SzOGx1Iw.png"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>

                            <h3>Expert Teachers</h3>
                            <p>Upskill with specialist</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click for All Career Path Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SliderHome;