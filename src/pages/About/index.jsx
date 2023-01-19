import PersonalImage from "../../assets/img/oluwakemi.jpg";
import {
  AboutWrapper,
  ExperienceRow,
  Experiences,
  ExperienceWrapper,
  SectionParagraph,
  SectionTitle,
  Year,
} from "./styles";
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
        <div className="personal-img">
          <img src={PersonalImage} alt="me" />
        </div>
      </div>
      <ExperienceWrapper>
        <SectionTitle>Experiences</SectionTitle>
        <SectionParagraph>
          An Overview of my academic and professional work
        </SectionParagraph>
        <Experiences>
          <ExperienceRow>
            <Year>
              <span>July 2022</span>
              <div className="line"></div>
              <span>Oct 2022</span>
            </Year>
            <div className="other-details">
              <h4 className="name of institution">Seomonitor</h4>
              <span className="location">Romania</span>
              <span className="position">Frontend Engineer</span>
            </div>
          </ExperienceRow>
        </Experiences>
      </ExperienceWrapper>
    </AboutWrapper>
  );
};
export default About;
