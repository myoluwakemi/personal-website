import React from "react";
import { HomeWrapper, ProjectOption } from "./styles";

const Home = () => (
  <HomeWrapper>
    <div className="banner">
      <div className="oluwakemi">
        <h1>Oluwakemi</h1>
      </div>
      <div className="oluwakemi-intro">
        <p>
          {" "}
          Front Engineer that Poised, passionate professional, and
          product-oriented, with 3+ years of experience working Javascript,
          ReactJS, VueJs, NextJs in a variety of fast-paced, dynamic, and
          ever-changing settings.{" "}
        </p>

        <p className="exp">
          Experience includes building and implementing beautiful User
          Interfaces, integrating REST APIs, management and scaling of web
          applications.
        </p>
        <a href="#">Projects</a>
      </div>
    </div>
    <div className="projects">
      <h1>Projects</h1>
      <ProjectOption className="project-options">
        <div className="row">
          <div className="project-details">
            <span>Ecommerce platform</span>
            <span>
              Framework:
              <span>React, Bootstrap, ContextApi, Sass, firebase,i18next </span>
            </span>
            <span className="year">2022-2023</span>
          </div>
          <div className="line"></div>
          <div>
            <span>01</span>
            <a href="#">Myk - ecommerce</a>
          </div>
        </div>
      </ProjectOption>
    </div>
  </HomeWrapper>
);
export default Home;
