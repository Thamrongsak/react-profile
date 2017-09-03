import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../containers/About'
import Education from '../containers/Education'
import Work from '../containers/Work'
import Skills from '../containers/Skills'
import Blogs from '../containers/Blogs'
import Contact from '../containers/Contact'
import NotFound from '../containers/NotFound'

// import '../assets/css/bootstrap.min.css';

import '../assets/css/font-awesome.min.css';
import '../assets/css/normalize.css';
import '../assets/css/colors/light-green.css';

import '../assets/css/style.css';
import '../assets/css/main-custom.css';


import Sidebar from './Sidebar'
import Header from './Header'
// import Footer from './Footer'

class App extends Component {
  render() {
    return (
        <div id="hs-container" className="hs-container">
            <Sidebar/>
            <div className="hs-content-scroller">
                <Header/>
                <div className="hs-content-wrapper">
                    <Switch>
                        <Route exact path='/' component={About}/>
                        <Route exact path='/education' component={Education}/>
                        <Route exact path='/work' component={Work}/>
                        <Route exact path='/skills' component={Skills}/>
                        <Route exact path='/blogs' component={Blogs}/>
                        <Route exact path='/contact' component={Contact}/>
                        {/* <Route path='/carduser/:name' component={UserInfo}/> */}
                        <Route component={NotFound} />
                    </Switch>
                    {/* <article className="hs-content about-section">
                        asasda
                    </article> */}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
