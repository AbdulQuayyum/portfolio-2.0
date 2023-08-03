import React from 'react'
import { motion } from "framer-motion";

import { StaggerContainer } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';
import Projects from './Projects'

const Project = () => {
  return (
    <motion.section
      initial="hidden"
      // variants={StaggerContainer}
      // viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      className="project main-section" id="Projects">
      <TitleText
        title="Projects"
        textStyles="section-title dark:text-[#fff]" />
      <TypingText
        title="Check out some of Abdul-Quayyum projects"
        textStyles="section-subtitle dark:text-gray-400"
      />

      {/* <span className="section-subtitle dark:text-gray-400">Let's check out some of Abdul-Quayyum's projects</span> */}
      <Projects />
    </motion.section>
  )
}

export default Project