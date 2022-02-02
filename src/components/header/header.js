import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs, faChild, faFolderOpen, faComments, faBlog, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import './header.css';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header-container">
      <div className="logo"><
        h1 className="header-logo" onClick={() => history.push("/home")}>
        <span className="logo-k">K</span><span>aungEain</span></h1></div>

      <div className="menu">
        <div data-nav="list">
          <ul className="anchor_nav">
            <li>
              <div className="list_inner">
                <a className="">
                  <button onClick={() => history.push("/home")}><FontAwesomeIcon icon={faHome} /> Home</button>
                </a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <a className="">
                  <button onClick={() => history.push("/about")}><FontAwesomeIcon icon={faChild} /> UserList</button></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <a className="">
                  <button onClick={() => history.push("/service")}>
                    <FontAwesomeIcon icon={faCogs} /> Service</button></a>
              </div>
            </li>
            <li>
              <div className="list_inner"><a href="#portfolio" className="">
                <button onClick={() => history.push("/portfolio")}>
                  <FontAwesomeIcon icon={faFolderOpen} /> Portfolio</button></a></div>
            </li>
            <li>
              <div className="list_inner"><a href="#testimonial" className="">
                <button onClick={() => history.push("/testimonial")}>
                  <FontAwesomeIcon icon={faComments} /> Testimonial</button></a></div>
            </li>
            <li>
              <div className="list_inner"><a href="#blog" className="">
                <button onClick={() => history.push("/blog")}>
                  <FontAwesomeIcon icon={faBlog} /> Blog</button></a></div>
            </li>
            <li>
              <div className="list_inner"><a href="#contact" className="active">
                <button onClick={() => history.push("/contact")}>
                  <FontAwesomeIcon icon={faAddressCard} /> Contact</button></a></div>
            </li>
          </ul>
        </div>
      </div>



















    </div>











  )
}

export default Header;
