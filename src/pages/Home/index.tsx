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

const projects = [
  {
    id: 1,
    details: "Ecommerce platform",
    frameworks: ["React", "ContextApi", "Sass", "firebase", "i18next"],
    year: "2022-2023",
    url: "https://myk-ecommerce.netlify.app/",
    urlName: "Myk - ecommerce",
  },
  {
    id: 2,
    details: "Recruitment Platform",
    frameworks: ["Vuejs", "vuex"],
    year: "2020-2021",
    url: "https://enum.africa/",
    urlName: "Enum",
  },
  {
    id: 3,
    details: "Academic Verification",
    frameworks: ["Vuejs", "Vuetify"],
    year: "2021",
    url: '"https://attestapp.netlify.app/',
    urlName: "AttestNG",
  },
];

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
          {projects.map((project, index) => (
            <ProjectRow
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={rowVariant}
              transition={{ duration: 4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ProjectRowDetails>
                <span>{project.details}</span>
                <div className="frameworks">
                  {Object.values(project.frameworks).map((framework, index) => {
                    return (
                      <span key={index} className="framework">
                        {framework}{(Object.values(project.frameworks).length -1 !== index) && ', '}
                      </span>
                    );
                  })}
                </div>

                <span className="year">{project.year}</span>
              </ProjectRowDetails>
              <Line className="line"></Line>
              <div className="project-url">
                <span>0{project.id}</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.urlName}
                </a>
              </div>
            </ProjectRow>
          ))}
        </ProjectOption>
      </div>
    </HomeWrapper>
  );
};

export default Home;
