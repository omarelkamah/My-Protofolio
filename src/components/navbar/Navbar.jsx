import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';


export default function Navbar({dark, openMenue, handeleMenue}) {
  return (
    <div className={'navbar ' + (openMenue && "active")} style={{background: dark && "#333"}}>
        <div className="navbarCon">
          <div className="left">
            <Link to="/" className='logo'>Omar Ahmed..</Link>
            <div className="navbar-contact" style={{color: dark && "#fff"}}>
              <i className="far fa-envelope-open"></i>
              <a href="mailto:omarwork010@gmail.com">omarwork010@gmail.com</a>
            </div>
            <div className="navbar-contact"  style={{color: dark && "#fff"}}>
              <i className="fas fa-phone"></i>
              <span>01006129547</span>
            </div>
          </div>
          <div className="right" onClick={() => handeleMenue(!openMenue)}>
            <span className="one" style={{background: dark && "#fff"}}></span>
            <span className="two" style={{background: dark && "#fff"}}></span>
            <span className="three" style={{background: dark && "#fff"}}></span>
          </div>
        </div>
    </div>
  );
}
