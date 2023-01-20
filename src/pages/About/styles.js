import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutWrapper = styled(motion.div)`
  padding: 5rem 3rem 0 3rem;
  margin-top: 4rem;
  color: #fff;
  .background-profile {
    display: grid;
    gap: 75px;
    grid-template-columns: 2fr 1fr;

    .personal-img {
      overflow: hidden;
      height: 400px;
      img {
        height: 600px;
        width: 100%;
        object-fit: contain;
      }
    }
  }
  @media (max-width: 476px) {
    padding: 4rem 1rem 0 1rem;
  }
  @media (max-width: 767px) {
    .background-profile {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 768px) and (max-width: 1070px) {
    .background-profile {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export const SectionParagraph = styled(motion.p)`
  padding-top: 3rem;
  font-size: 17px;
  letter-spacing: 0.01em;
  line-height: 28px;
`;

export const ExperienceWrapper = styled(motion.div)`
  margin: 3rem auto 0 auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 70%;
  p {
    padding-top: 1rem;
  }
`;

export const SectionTitle = styled.h3`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  font-family: "Londrina Solid";
  font-size: 24px;
`;
export const Experiences = styled(motion.div)`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ExperienceRow = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  height: 240px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  .other-details {
    display: flex;
    flex-direction: column;
    span {
      font-size: 15px;
      letter-spacing: 0.01em;
      line-height: 28px;
    }
  }
  h4 {
    font-size: 17px;
    letter-spacing: 0.01em;
    line-height: 28px;
  }
   @media(max-width: 660px){
    flex-direction:column;
    text-align: center;
   }
`;
export const Year = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 135px;
  box-shadow: 0 10px 20px #c3c8d8;
  text-align: center;
  span {
    font-weight: bolder;
    font-size: 20px;
    letter-spacing: 0.01em;
  }
  .line {
    background: #fff;
    height: 1px;
    width: 80%;
    opacity: 60%;
  }
  @media (max-width: 660px) {
    box-shadow: unset;
  }
`;
