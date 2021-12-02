import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap'

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { LogoutAction } from '../../redux/actions/LoginActions'

const TopNavbar = () => {

    const isLogin = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()

    const [navbarToggle, setNavbarToggle] = useState(false)

    const handleLogOut = () => {
        dispatch(LogoutAction())
    }

    return (
        <Navbar
            className="m-2"
            style={{ backgroundColor: '#3F51B5' }}
            expand="md"
            sticky="top"
            light
        >
            <div>
                <button
                    className="btn btn-primary"
                    onClick={function noRefCheck() { }}

                >
                    M
                </button>
                <NavbarBrand
                    tag={Link}
                    to="/"
                    className="text-light m-3"
                    href="/"
                >
                    Awesome Blog
                </NavbarBrand>
            </div>

            <NavbarToggler onClick={() => setNavbarToggle(!navbarToggle)} />

            <Collapse navbar isOpen={navbarToggle}>

                <Nav
                    className="w-100 justify-content-end"
                    navbar
                >
                    {
                        isLogin.length ?
                            (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} to="/profile" className="text-light" href="/components/">
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="text-light" >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </>
                            ) : (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} to="/login" className="text-light" href="/components/">
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/register" className="text-light" href="">
                                            Register
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                    }

                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default TopNavbar
