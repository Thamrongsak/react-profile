import React, { Component } from 'react'

class Education extends Component {
    render(){
        return(
            <article className="hs-content resume-section">
                <div className="hs-inner">
                    <h2>Education</h2>
                    <div className="resume-wrapper">
                        {/* <ul className="education">
                            <li><span className="smaller"><span className="fa fa-clock-o" aria-hidden="true"></span>September 2008 - June 2010</span></li>
                            <li><span className="bigger">
                                Masters Degree<br/>
                                <b>University of IT in Melbourne, Australia</b></span>
                            </li>
                            <li>
                                <span className="smaller">
                                    <span className="fa fa-star" aria-hidden="true"></span>
                                    <i>Achievements - Vestibulum ut pharetra diam, vitae hendrerit sapien</i>
                                </span>
                            </li>
                        </ul>

                        <ul className="education">
                            <li><span className="smaller"><span className="fa fa-clock-o" aria-hidden="true"></span>September 2008 - June 2010</span></li>
                            <li><span className="bigger">
                                Masters Degree<br/>
                                <b>University of IT in Melbourne, Australia</b></span>
                            </li>
                            <li>
                                <span className="smaller">
                                    <span className="fa fa-star" aria-hidden="true"></span>
                                    <i>Achievements - Vestibulum ut pharetra diam, vitae hendrerit sapien</i>
                                </span>
                            </li>
                        </ul> */}

                        <ul className="resume">
                            {/* <li className="time-label">
                                <span className="content-title">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</span>
                            </li> */}
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-graduation-cap"></span>
                                    <div className="resume-date">
                                        <span>2009</span>
                                        <div className="separator"></div>
                                        <span>2012</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Mahasarakham</span>
                                    <h3 className="timeline-header"> BUSINESS COMPUTING - B.B.A</h3>
                                    <div className="timeline-body">
                                        <h4>MAHASARAKHAM UNIVERSITY</h4>
                                        <ul className="fa-ul">
                                        <li><i className="fa-li fa fa-angle-right"></i>Degree / Certificate : Bachelor of Business Computing(B.B.A)</li>
                                        <li><i className="fa-li fa fa-angle-right"></i>GPAX : 3.28</li>
                                    </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-graduation-cap"></span>
                                    <div className="resume-date">
                                        <span>2008</span>
                                        <div className="separator"></div>
                                        <span>2006</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Buriram</span>
                                    <h3 className="timeline-header"> SCIENCE AND METHEMATICS </h3>
                                    <div className="timeline-body">
                                        <h4>NONGTADPITTAYAKHAM SCHOOL</h4>
                                        <ul className="fa-ul">
                                        <li><i className="fa-li fa fa-angle-right"></i>Degree / Certificate : High School Certificate</li>
                                        <li><i className="fa-li fa fa-angle-right"></i>GPAX : 3.03</li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hs-inner">
                    <h2>WORKS AND EXPERIENCE</h2>
                    <div className="resume-wrapper">
                        <ul className="resume">
                            {/* <li className="time-label">
                                <span className="content-title">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</span>
                            </li> */}
                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-briefcase"></span>
                                    <div className="resume-date">
                                        <span>2015</span>
                                        <div className="separator"></div>
                                        <span>Present</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Nawamin Bangkok</span>
                                    <h3 className="timeline-header">WEB DEVELOPER</h3>
                                    <div className="timeline-body">
                                        <h4>BIZIDEA CO., LTD.</h4>
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>Position : Web Developer (Customize)</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-briefcase"></span>
                                    <div className="resume-date">
                                        <span>2013</span>
                                        <div className="separator"></div>
                                        <span>2015</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Sapanmai Bangkok</span>
                                    <h3 className="timeline-header">WEB DEVELOPER</h3>
                                    <div className="timeline-body">
                                        <h4>CHANNEL WIDE COMPUTER CO., LTD.</h4>
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>Position : Web Developer</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-briefcase"></span>
                                    <div className="resume-date">
                                        <span>2013</span>
                                        <div className="separator"></div>
                                        <span>2013</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Rangsit, Pathum Thani</span>
                                    <h3 className="timeline-header">ANDROID MOBILE APPLICATION</h3>
                                    <div className="timeline-body">
                                        <h4>SIPA, NETDESIGN</h4>
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>Android Mobile Application Trainnig</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="resume-tag">
                                    <span className="fa fa-briefcase"></span>
                                    <div className="resume-date">
                                        <span>2011</span>
                                        <div className="separator"></div>
                                        <span>2011</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-location"><i className="fa fa-map-marker"></i>Ladprao Bangkok</span>
                                    <h3 className="timeline-header">WEB DEVELOPER(Trainee)</h3>
                                    <div className="timeline-body">
                                        <h4>SYNERRY CORPORATION (THAILAND) CO., LTD.</h4>
                                        <ul className="fa-ul">
                                            <li><i className="fa-li fa fa-angle-right"></i>Position : Web Developer(Trainee)</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        )
    }
}

export default Education