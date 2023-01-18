import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";
import { createPortal } from "react-dom";
import { HeaderNav } from "./styles";

const Header = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const variantA = {
    open: { opacity: 0, x: "-100%" },
    closed: { opacity: 1, x: 0 },
  };

  const today = new Date();
  const currDate = today.toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  const getTime = today.getHours() + ":" + today.getMinutes();

  const toggleSidebar = () => {
    setShowSideBar(!showSidebar);
  };
  const handleClickScroll = () => {
    toggleSidebar()
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  
  };
  return (
    <HeaderNav>
      <div className="inner-header">
        <motion.div className="logo">
          <motion.h4
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ opacity: 0, x: "-50%" }}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          >
            KEMI
          </motion.h4>
        </motion.div>
        <div className="date-container">
          {currDate} {getTime}
        </div>
        <div className="toggle-button" onClick={toggleSidebar}>
          <motion.span
            animate={showSidebar ? "open" : "closed"}
            variants={variantA}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          ></motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.span>
        </div>
        {showSidebar && createPortal(<Sidebar onClick={ handleClickScroll} />, document.body)}
      </div>
    </HeaderNav>
  );
};
export default Header;
