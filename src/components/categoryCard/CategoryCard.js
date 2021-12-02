import React from 'react'
import { Row, Col, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
    return (
        <div
            className="card-container my-5"
        >
            <Row>

                <Col lg="6">
                    <NavLink tag={Link} to={`courses/${category.slug}`}>
                        <img className="card-img" src={category.bg_image_url} alt="" />
                    </NavLink>
                </Col>
                <Col lg="6">

                    <div className="card-body">
                        <NavLink tag={Link} to={`courses/${category.slug}`}>
                            <h2 
                            className="text-dark text-uppercase text-center"
                            >
                            {category.name}</h2>
                        </NavLink>

                        <p
                        style={{textIndent: '40px'}}
                        >{category.description}</p>
                    </div>
                </Col>


            </Row>
        </div>
    )
}

export default CategoryCard
