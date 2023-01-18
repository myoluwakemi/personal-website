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
      margin-bottom: 2rem;
    }
  }
`;
export const ProjectOption = styled(motion.div)`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ProjectRow = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 2.5rem 0;
  height:240px;
  border-top:1px solid rgba(255,255, 255, 0.5);
   border-bottom: 1px solid rgba(255,255, 255, 0.5);
  .project-url{
    display: flex;
    flex-direction: column;
    span{
        font-size: 14px;
        line-height: 1.6em;
    }
    a{
        color: #ffff;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }
  }
  
  
  j
`;

export const ProjectRowDetails = styled(motion.div)`
  display: flex;
  align-items: start;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.6em;
  span {
    font-weight: lighter;
  }
`;

export const Line = styled(motion.div)`
  background: #fff;
  width: 20%;
  height: 1px;
  opacity: 60%;
`;
