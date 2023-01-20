
import { motion } from "framer-motion";
import {
  AboutWrapper,
  ExperienceRow,
  Experiences,
  ExperienceWrapper,
  SectionParagraph,
  SectionTitle,
  Year,
} from "./styles";

const experiences = [
  {
    year_from: "July 2022",
    year_to: "Oct 2022",
    company_name: "SEOmonitor",
    location: "Romania",
    position: "Front Engineer",
  },
  {
    year_from: "Oct 2021",
    year_to: "June 2022",
    company_name: "D'accubin",
    location: "Lagos, Nigeria",
    position: "Front Engineer",
  },
  {
    year_from: "July 2019",
    year_to: "Sept 2021",
    company_name: "Semicolon Africa",
    location: "Lagos, Nigera",
    position: "Software Engineer",
  },
];

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.5, 0.9] };
const About = () => {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="background-profile">
        <div className="background-text">
          <SectionTitle>Background</SectionTitle>
          <SectionParagraph>
            As a frontend Engineer. I started my professional career in Nigeria
            before extending as Romania(remote). I have had the opportunity to
            work on various projects using different javascripts frameworks. My
            endeavors with several intercultural team mates provided me with all
            the knowledge necessary to hone my problem solving skills. Currently
            located in Nigeria.
          </SectionParagraph>
        </div>
        <motion.div
          initial={{
            y: "-50%",
            width: 500,
            height: 650,
          }}
          animate={{
            y: "0",
            width: "100%",
            height: window.innerWidth > 1440 ? 400 : 400,
            transition: { duration: 2, ...transition },
          }}
          className="personal-img"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
           srcSet='assets/oluwakemi.jpg'
            src='assets/oluwakemi.jpg'
            alt="me"
          />
        </motion.div>
      </div>
      <ExperienceWrapper>
        <SectionTitle>Experiences</SectionTitle>
        <SectionParagraph>
          An Overview of my academic and professional work
        </SectionParagraph>
        <Experiences>
          {experiences.map((experience) => (
            <ExperienceRow
              initial={{ opacity: 0, x: "-100%", background: "#000" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 4 }}
              whileHover={{
                background: "#efefef",
                color: "#000",
                borderRadius: "6px",
              }}
            >
              <Year>
                <span>{experience.year_from}</span>
                <motion.div
                  initial={{ background: "#fff" }}
                  whileHover={{
                    background: "#000",
                  }}
                  transition={{ duration: 4 }}
                  className="line"
                ></motion.div>
                <span>{experience.year_to}</span>
              </Year>
              <div className="other-details">
                <h4 className="name of institution">
                  {experience.company_name}
                </h4>
                <span className="location">{experience.location}</span>
                <span className="position">{experience.position}</span>
              </div>
            </ExperienceRow>
          ))}
        </Experiences>
      </ExperienceWrapper>
    </AboutWrapper>
  );
};
export default About;
