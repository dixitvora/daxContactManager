import React from 'react';
import PropTypes from 'prop-types';


 const Header = (props) =>{
     const {branding} = props;
  return (
   <nav className="navbar navbar-expand-lg navbar-light secondary-color   mb-5 ">
      <div className="container">
        <a href="/" className="navbar-brand "> <h2>{branding}</h2></a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
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
