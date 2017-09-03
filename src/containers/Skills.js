import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
            <article className="hs-content resume-section">
                <div className="hs-inner">
                    <h2>Skills</h2>
                    
                    <div className="resume-wrapper">
                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">JAVASCRIPT</h3>
                                    <div className="timeline-body">
                                        {/* <h4>MAHASARAKHAM UNIVERSITY</h4> */}
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>React</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Angular</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>JavaScript (ES5, ES6)</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Redux</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">Version Control</h3>
                                    <div className="timeline-body">
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>Git</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Github</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Bitbucket</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Gitlab</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">PHP</h3>
                                    <div className="timeline-body">
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>พัฒนาเว็บแอพพลิเคชั่นโดยใช้ Framework Codeigniter, Laravel ใด้เป็นอยา่งดี</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>ใช้งาน RESTful API ได้</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                        
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">HTML/CSS</h3>
                                    <div className="timeline-body">
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>CSS3, SCSS, LESS</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>HTML</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                        
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">E-Commerce</h3>
                                    <div className="timeline-body">
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>พัฒนาเว็บ E-Commerce โดยใช้ Opencart ติดตั้ง , สร้างธีม และเขียน Extensions Opencart ใด้เป็นอย่างดี</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>เชื่อมต่อ Payment Gatway ใด ้ เช่น KBank, Bangkok Bank iPay, Omise, 2C2P, Pay@All</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>เชื่อมต่อ Shipping API ใด ้ เช่น Acommerce</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="resume">
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-star"></span>
                                    <div className="resume-date">
                                        
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="timeline-header">Other</h3>
                                    <div className="timeline-body">
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>npm, Yarn</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>GraphQL</li>
                                            
                                            
                                            <li><i className="fa-li fa fa-angle-right"></i>Linux</li>
                                            <li><i className="fa-li fa fa-angle-right"></i>Composer</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        {/* <ul className="education">
                            <li>
                                <span className="bigger">Version Control</span>
                                <span className="smaller">
                                    <span className="fa fa-star" aria-hidden="true"></span>
                                    <i>Git, Github, Bitbucket, Gitlab </i>
                                </span>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </article>
        );
    }
}

export default Skills;
