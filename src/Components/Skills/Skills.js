import React from 'react'
import { motion } from "framer-motion";

import { FadeInAnimation, StaggerContainer } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';
import Backend from './Backend'
import Frontend from './Frontend'
import Mobile from './Mobile'

const Skills = () => {
    return (
        <motion.section
            initial="hidden"
            variants={StaggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            whileInView="show"
            className="skills main-section" id="Skills">
            <TitleText
                title="Skills"
                textStyles="section-title dark:text-[#fff]" />
            <TypingText
                title="Why choose Abdul-Quayyum?"
                textStyles="section-subtitle dark:text-gray-400" />
            <motion.div
                variants={FadeInAnimation('up', 'tween', 0.2, 1)}
                className="skills-container main-container main-grid">
                <Frontend />
                <Backend />
                <Mobile />
            </motion.div>
        </motion.section>
    )
}

export default Skills