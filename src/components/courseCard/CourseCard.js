import React from 'react'
import { Row, Col, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'



const CourseCard = ({ course, coursename }) => {


    return (
        <div
            className="card-container shadow my-5"
        >
            <Row>

                <Col lg="6">
                    <NavLink tag={Link} to={`/courses/${coursename}/${course.slug}`}>
                        <img className="card-img" src={course.bg_image_url} alt="" />
                    </NavLink>
                </Col>
                <Col lg="6">

                    <div className="card-body">
                        <NavLink tag={Link} to={`/courses/${coursename}/${course.slug}`}>
                            <h2
                                className="text-dark text-uppercase text-center"
                            >
                                {course.name}</h2>
                        </NavLink>

                        <p
                            style={{ textIndent: '40px' }}
                        >{course.description}</p>
                    </div>
                </Col>


            </Row>
        </div>
    )
}

export default CourseCard
