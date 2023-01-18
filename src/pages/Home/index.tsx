import React from "react";
import {
  HomeWrapper,
  Line,
  ProjectOption,
  ProjectRow,
  ProjectRowDetails,
} from "./styles";

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
      <ProjectOption>
        <ProjectRow>
          <ProjectRowDetails>
            <span>Ecommerce platform</span>
            <span className="framework">
             React,ContextApi,Sass, firebase,i18next 
            </span>
            <span className="year">2022-2023</span>
          </ProjectRowDetails>
          <Line className="line"></Line>
          <div className="project-url">
            <span>01</span>
            <a href="#">Myk - ecommerce</a>
          </div>
        </ProjectRow>
      </ProjectOption>
    </div>
  </HomeWrapper>
);
export default Home;
