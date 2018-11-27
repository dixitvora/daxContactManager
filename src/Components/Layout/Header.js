import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


 const Header = (props) =>{
     const {branding} = props;
  return (
   <nav className="navbar navbar-expand-lg navbar-light secondary-color   mb-5 ">
      <div className="container">
        <Link to="/" className="navbar-brand "> <h2>{branding}</h2></Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link ">Home
                <i className="fa fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">About
                <i className="fa fa-question"></i>
              </Link>            
            </li>
            <li className="nav-item">
              <Link to='/addcontact' className="nav-link">Add Contact
                <i className="fa fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
   </nav>
  );

  };
  Header.defaultProps={
      branding:'My Contact App'
  };
  Header.propTypes={
      branding: PropTypes.string.isRequired
  }
export default Header;
