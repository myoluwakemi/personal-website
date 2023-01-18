import React from "react";
import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// type Props = {
//   onClick?: React.MouseEventHandler;
//   children?: React.ReactNode;
// };

const Sidebar = () => (
  <SidebarWrapper>
    <div className="sidebar-content">
      <div className="sides-div">
        <span className="sidebar-header">Navigation</span>
        <div className="navigation">
          <Link to="/">Projects</Link>
          <Link to="/">About</Link>
          <Link to="/">Resume</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="sides-div socials">
        <span className="sidebar-header">Socials</span>
        <ul className="social-options">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </li>
           <li>
            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
           <li>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
           
          
        </ul>
      </div>
    </div>
  </SidebarWrapper>
);

export default Sidebar;
