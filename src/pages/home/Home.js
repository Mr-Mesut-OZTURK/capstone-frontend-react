import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CategoryCard from '../../components/categoryCard/CategoryCard'


const Home = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        axios.get("http://127.0.0.1:8000/courses/category/")
            .then(response => setCategories(response.data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {
                categories.map((item, index) => (
                    <CategoryCard key={index} category={item} />
                ))
            }
        </div>
    )
}

export default Home
