import React from "react";
import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

type Props = {
  onClick?: ()=> void;

};

const Sidebar = ({onClick}: Props) => {
  
  return (
    <SidebarWrapper>
      <div className="sidebar-content">
        <div className="sides-div">
          <span className="sidebar-header">Navigation</span>
          <ul className="navigation">
            <li onClick={onClick}>
              <a onClick={(e) => e.preventDefault()} href="/">
                Projects
              </a>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              {" "}
              <a href="mailto:yusufoluwakemi39@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sides-div socials">
          <span className="sidebar-header">Socials</span>
          <ul className="social-options">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a  href="#" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
