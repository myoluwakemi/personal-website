import { motion } from "framer-motion";
import styled from "styled-components";

export const SidebarWrapper = styled(motion.aside)`
  position: fixed;
  top: 8.5%;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  height: 100vh;
  .sidebar-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3.5rem;
    padding-top: 4rem;
    padding-left: 1rem;
    color: #fff;
    @media (min-width: 476px) {
      padding-left: 3rem;
    }
    @media (min-width: 767px) {
      padding-left: 5rem;
    }
    .sides-div {
      .navigation {
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem;
        list-style: none;
        padding-left: 0;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 30px;
          letter-spacing: 3px;
          @media (min-width: 476px) {
            font-size: 50px;
          }
          @media (min-width: 767px) {
            font-size: 70px;
          }
        }
      }
      .social-options {
        padding: 1.5rem 0 0 0;

        li {
          list-style: none;
          margin-bottom: 1rem;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
      .sidebar-header {
        font-family: "Londrina Solid", cursive;
        font-weight: 300;
        font-size: 25px;
      }
    }
    @media (max-width: 786px) {
      grid-template-columns: 1fr;
    }
    
  }
   @media (max-width: 786px) {
      .socials{
        padding-top: 2rem;
      }
    }
  }
`;
