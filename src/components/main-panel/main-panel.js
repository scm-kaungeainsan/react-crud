import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import About from '../../pages/about/about';
import Blog from '../../pages/blog/blog';
import Contact from '../../pages/contact/contact';
import Home from '../../pages/home/home';
import Portfolio from '../../pages/portfolio/portfolio';
import Service from '../../pages/service/service';
import Testimonial from '../../pages/testimonial/testimonial';
import './main-panel.css';




const MainPanel = () => {

  useEffect(() => {
    // HeaderView()
  }, [])



  const HeaderView = () => {
    const location = useLocation();
    console.log(location.pathname);
    // return <span>Path : {location.pathname}</span>
  }

  return (
    <div>
      <div className="main-panel-container">
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/service' component={Service} />
        <Route path='/testimonial' component={Testimonial} />
      </div>
      <Router>
        <div>
          {/* {path != '/about' ? (<About></About>):null}  */}
        </div>
      </Router>
    </div>

  );
}

export default MainPanel;
