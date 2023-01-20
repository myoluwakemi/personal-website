import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HomeWrapper,
  Line,
  ProjectOption,
  ProjectRow,
  ProjectRowDetails,
} from "./styles";

const rowVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 4 } },
  hidden: { opacity: 0, y: "-100%" },
};

const Home = () => {
  //  const container = document.querySelector("body") as HTMLElement;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleClickScroll = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="banner">
        <motion.div className="oluwakemi">
          <motion.h1
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Oluwakemi
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ x: 300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="oluwakemi-intro"
        >
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
          <a href="/" onClick={handleClickScroll}>
            Projects
          </a>
        </motion.div>
      </motion.div>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <ProjectOption>
          <ProjectRow
          ref={ref}
            initial="hidden"
           animate={controls}
           variants={rowVariant}
            transition={{ duration: 4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
              <a
                href="https://myk-ecommerce.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Myk - ecommerce
              </a>
            </div>
          </ProjectRow>
          <ProjectRow>
            <ProjectRowDetails>
              <span>Recruitment Platform</span>
              <span className="framework">Vuejs</span>
              <span className="year">2020-2021</span>
            </ProjectRowDetails>
            <Line className="line"></Line>
            <div className="project-url">
              <span>02</span>
              <a
                href="https://enum.africa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enum
              </a>
            </div>
          </ProjectRow>
          <ProjectRow>
            <ProjectRowDetails>
              <span>Academic Verification</span>
              <span className="framework">Vuejs, Vuetify</span>
              <span className="year">2021</span>
            </ProjectRowDetails>
            <Line className="line"></Line>
            <div className="project-url">
              <span>03</span>

              <a
                href="https://attestapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AttestNG
              </a>
            </div>
          </ProjectRow>
        </ProjectOption>
      </div>
    </HomeWrapper>
  );
};

export default Home;
