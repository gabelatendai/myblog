import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <p>All rights reserved @2020 blog by gabriel </p>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout