import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div id="header_container">
                <div id="header">
                    <div>
                        <NavLink to="/" className="home"><i className="fa fa-home"></i></NavLink>
                    </div>

                    <nav className="breadcrumb">
                        <a className="breadcrumb-item">Hello. I am a front end and web developer </a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header