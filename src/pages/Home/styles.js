import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  padding: 6rem 2.5rem 0 2.5rem;
  margin-top: 4rem;

  .banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-item: center;
    color: #fff;
    height: 100vh;
    .oluwakemi {
      h1 {
        font-size: 100px;
        font-family: "Londrina Solid";
        font-weight: 900;
      }
    }
    .oluwakemi-intro {
      p {
        font-size: 20px;
        font-size: 25px;
        line-height: 48px;
        font-weight: 400;
        text-align: left;
      }
      .exp {
        margin-bottom: 2rem;
      }
      a {
        border: 1px solid #fff;
        color: #fff;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 30px;
        font-weight: bold;
      }
    }
  }
  .projects {
    color: #fff;

    h1 {
      text-align: center;
      font-size: 50px;
      letter-spacing: 3px;
    }
  }
`;
export const ProjectOption = styled(motion.div)`
  margin-top: 1.5rem;
  max-width: 1400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ProjectRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-item: center;
`;
