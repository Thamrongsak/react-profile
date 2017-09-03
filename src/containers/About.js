import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
            <article className="hs-content about-section" id="about">
                <div className="hs-inner">
                    <h2>ABOUT</h2>
                    <span className="content-title">PERSONAL DETAILS</span>
                    <div className="aboutInfo-contanier">
                        <div className="about-card">
                            <div className="face2 card-face">
                                <div id="cd-google-map">
                                    <div id="google-container"></div>
                                    <div id="cd-zoom-in"></div>
                                    <div id="cd-zoom-out"></div>
                                    <address>99/222 Soi Nawamin 95 Nawamin Road, Bangkok 10240.</address>
                                    <div className="back-cover" data-card-back="data-card-back">
                                        <i className="fa fa-long-arrow-left"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="face1 card-face">
                                <div className="about-cover card-face">
                                    <a className="map-location" data-card-front="data-card-front">
                                        <img src="images/map-icon.png" alt=""/>
                                    </a>
                                    <div className="about-details">
                                        <div>
                                            <span className="fa fa-envelope"></span><span className="detail">somkhokkruad.t@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="fa fa-phone"></span><span className="detail">090-991-7697</span>
                                        </div>
                                        <div>
                                            <span className="fa fa-map-marker"></span><span className="detail">Bung Kum, Bangkok, Thailand</span>
                                        </div>
                                    </div>

                                    <div className="cover-content-wrapper">
                                        <span className="about-description">Hello. I am a front end and web developer 
                                        <br/>I am passionate about programming and coding
                                        <br/>Welcome to my Personal profile</span>
                                        <span className="status">
                                        <span className="fa fa-circle"></span>
                                        <span className="text">Available as <strong>freelance</strong></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-details">
                        
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default About;
