import React from "react";
import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

type Props = {
  onClick?: () => void;
};

const Sidebar = ({ onClick }: Props) => {
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
              <a
                href="https://docs.google.com/document/d/1v3zBDgAPl0t28jkK-X_XIfwmW7F81Qf0g8Y2_8Wlv-I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
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
              <a
                href="https://www.linkedin.com/in/oluwakemiyusuf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/myoluwakemi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/myoluwakemi"
                target="_blank"
                rel="noopener noreferrer"
              >
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
