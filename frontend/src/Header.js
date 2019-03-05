import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
            <nav className="header__nav">
                < span><img src='/Assets/Images/Icons/BrainFlix Logo.svg' className="header__link nav-logo" alt="logo" /></span>
                <form className="header__link header__form ">
                  <input className="header__input" type="text" placeholder=" Search..." name="serarch" /> 
                  <button className="header__button header__search">
                     <img src='/Assets/Images/Icons/Search.svg' alt="search" />
                  </button>
                </form>
                <Link to="/upload"><img src='/Assets/Images/Icons/Content Upload.svg' className="header__link " alt="update" /></Link>
                <span><img src='/Assets/Images/john_gibbons.jpg' className="header__link header__login" alt="user login" /></span>
            </nav>
      </div>
    );
  }
}

export default Header;