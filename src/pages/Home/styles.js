import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  padding: 5rem 2.5rem 0 2.5rem;
  margin-top: 4rem;

  .banner {
    display: grid;
    grid-template-columns: 1fr;
    align-item: center;
    color: #fff;
    height: 100vh;

    .oluwakemi {
      h1 {
        font-size: 100px;
        font-family: "Londrina Solid";
        font-weight: 900;
        font-stretch: expanded;
      }
    }
    .oluwakemi-intro {
      p {
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
    @media (min-width: 476px) and (max-width: 589px){
      margin-top: 6.5rem;
    }

    h1 {
      text-align: center;
      font-size: 50px;
      letter-spacing: 3px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 476px) {
    padding: 4rem 1rem 0 1rem;
    .banner {
      .oluwakemi {
        h1 {
          font-size: 40px;
        }
      }
      .oluwakemi-intro {
        p {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
    .projects{
      h1{
        font-size: 30px;
      }
    }
    
  }
  
  @media (min-width: 992px) {
    .banner {
      grid-template-columns: 1fr 1fr;
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
  height: 240px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  .project-url {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      line-height: 1.6em;
    }
    a {
      color: #ffff;
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    .project-url {
      span {
        display: none;
      }
      a {
        text-align: center;
      }
    }
  }
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
  @media (max-width: 992px) {
    order: 3;
    align-items: center;
    text-align: center;
  }
`;

export const Line = styled(motion.div)`
  background: #fff;
  width: 20%;
  height: 1px;
  opacity: 60%;
   @media (max-width: 992px) {
    order: 2;
   }
`;
