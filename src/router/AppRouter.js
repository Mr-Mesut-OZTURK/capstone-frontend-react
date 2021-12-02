import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import PublicRoute from './publicRoute/PublicRoute';
import PrivateRoute from './privateRoute/PrivateRoute'

import TopNavbar from '../components/topNavbar/TopNavbar'

import Home from '../pages/home/Home'

import Courses from '../pages/courses/Courses'
import Lessons from '../pages/lessons/Lessons'
import Posts from '../pages/posts/Posts'

import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Profile from '../pages/profile/Profile'


const AppRouter = () => {
    return (
        <Router>

            <TopNavbar />

            <div className="m-2">
                <Routes>
                    {/* Normal routes */}
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/courses/:coursename" element={<Courses />} />
                    <Route  path="/courses/:coursename/:lessonname" element={<Lessons />} />
                    <Route  path="/courses/:coursename/:lessonname/:postname" element={<Posts />} />


                    {/* Public routes */}
                    <Route path="/login" element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="/register" element={<PublicRoute />}>
                        <Route path="/register" element={<Register />} />
                    </Route>


                    {/* Private routes */}
                    <Route path="/profile" element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>

                </Routes>
            </div>

        </Router>
    )
}

export default AppRouter
