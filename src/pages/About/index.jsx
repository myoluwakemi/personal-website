import PersonalImage from "../../assets/img/oluwakemi.jpg";
import { AboutWrapper, ExperienceWrapper, SectionTitle } from "./styles";
const About = () => {
  return (
    <AboutWrapper>
      <div className="background-profile">
        <div className="background-text">
          <SectionTitle>Background</SectionTitle>
          <p>
            As a frontend Engineer. I started my professional career in Nigeria
            before extending as Romania(remote). I have had the opportunity to
            work on various projects using different javascripts frameworks. My
            endeavors with several intercultural team mates provided me with all
            the knowledge necessary to hone my problem solving skills. Currently
            located in Nigeria.
          </p>
        </div>
        <div className="personal-img">
          <img src={PersonalImage} alt="me" />
        </div>
      </div>
      <ExperienceWrapper>
        <SectionTitle>Experiences</SectionTitle>
        <p>An Overview of academic and professional work</p>
        <div className="experiences">
          <div className="experience row">
            <div>
              <span>Aug 2021</span>
              <div></div>
              <span>Sept 2022</span>
            </div>
            <div>
              <h5 className="name of institution">Seomonitor</h5>
              <span className="location">Romania</span>
              <span className="position">Frontend Engineer</span>
            </div>
          </div>
        </div>
      </ExperienceWrapper>
    </AboutWrapper>
  );
};
export default About;
