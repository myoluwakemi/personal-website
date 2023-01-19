import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutWrapper = styled(motion.div)`
  padding: 5rem 3rem 0 3rem;
  margin-top: 4rem;
  color: #fff;
  .background-profile {
    overflow: hidden;
    display: grid;
    gap: 75px;
    grid-template-columns: 2fr 1fr;
    height: 400px;
    .background-text {
      p {
        padding-top: 3rem;
        font-size: 17px;
        letter-spacing: 0.01em;
        line-height: 28px;
      }
    }
    .personal-img {
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const ExperienceWrapper = styled(motion.div)`
margin: 3rem auto 0 auto;
padding-top: 4rem;
display: flex;
flex-direction: column;
width: 70%;


`     

export const SectionTitle = styled.h3`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  font-family: "Londrina Solid";
  font-size: 24px;
`;
