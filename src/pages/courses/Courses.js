import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CourseCard from '../../components/courseCard/CourseCard'


const Courses = () => {

    const { coursename } = useParams()

    const [courses, setCourses] = useState([])

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        axios.get("http://127.0.0.1:8000/courses/course/")
            .then(response => {
                setCourses(response.data.filter(item => (item.category.slug === coursename)))
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <div className="container py-5">

                {
                    courses.map((item, index) => (
                        <CourseCard course={item} key={index} coursename={coursename}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Courses
