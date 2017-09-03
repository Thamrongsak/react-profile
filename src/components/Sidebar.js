import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


import imgProfile from '../images/profile.jpg';

class Sidebar extends Component {
    render(){
        return(
            <div>
                <div className="aside1">
                    <a className="contact-button"><i className="fa fa-paper-plane"></i></a>
                    <a className="download-button"><i className="fa fa-cloud-download"></i></a>
                    <div className="aside-content"><span className="part1">THAMRONGSAK.S</span><span className="part2">I am a developer</span>
                    </div>
                </div>

                <aside className="hs-menu" id="hs-menu">
                    <div className="hs-headline">
                        <div className="img-wrap">
                            <img src={imgProfile} alt=""/>
                        </div>
                        <div className="profile_info">
                            <h1>Thamrongsak.s</h1>
                            <h4>Web Developer, Front End Developer</h4>
                            <h6><span className="fa fa-envelope"></span>&nbsp;&nbsp;&nbsp;somkhokkruad.t@gmail.com</h6>
                            <h6><span className="fa fa-phone"></span>&nbsp;&nbsp;&nbsp;090-991-7697</h6>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="separator-aside"></div>
                    
                    <nav>
                        <NavLink exact to="/" activeClassName="is-active"><span className="menu_name">About</span><span className="fa fa-bookmark-o"></span> </NavLink>
                        <NavLink to="/education" activeClassName="is-active"><span className="menu_name">Education, Work</span><span className="fa fa-laptop"></span> </NavLink>
                        {/* <NavLink to="/work" activeClassName="is-active"><span className="menu_name">Work experience</span><span className="fa fa-laptop"></span> </NavLink> */}
                        <NavLink to="/skills" activeClassName="is-active"><span className="menu_name">Skills</span><span className="fa fa-star"></span> </NavLink>
                        <a href={'https://medium.com/@somkhokkruad.t'} target="_blank"><span className="menu_name">Blogs</span><span className="fa fa-newspaper-o"></span> </a>
                        {/* <NavLink to="/contact" activeClassName="is-active"><span className="menu_name">Contact</span><span className="fa fa-paper-plane"></span> </NavLink> */}
                    </nav>

                    <div className="aside-footer">
                        <a href={"https://www.facebook.com/thamrongsuk.somkhokkruad"} target="_blank"><i className="fa fa-facebook"></i></a>
                        <a href={"https://twitter.com/Thamrongsak_s"} target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href={"https://medium.com/@somkhokkruad.t"} target="_blank"><i className="fa fa-medium"></i></a>
                        <a href={"https://www.linkedin.com/in/thamrongsak-somkhokkruad-b96155121"} target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href={"https://github.com/Thamrongsak"} target="_blank"><i className="fa fa fa-github"></i></a>
                    </div>

                </aside>

            </div>
        )
    }
}

export default Sidebar;