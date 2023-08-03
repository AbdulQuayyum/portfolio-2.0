import React from 'react'
import { motion } from "framer-motion";

import { FadeInAnimation, StaggerContainer } from '../../Utilities/Motion/Motion';
import Data from './Data'
import gig from "../../Assets/Images/gig.png"

const Home = () => {

    return (
        <motion.div
            initial="hidden"
            variants={StaggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            whileInView="show">
            <motion.section
                variants={FadeInAnimation('up', 'tween', 0.2, 1)}
                className="home main-section" id="Home">
                <div className="home-container main-container main-grid">
                    <div className="home-content main-grid">
                        <div className="home-content-1">
                            <Data />
                        </div>
                        <div className="home-content-2">
                            <img src={gig} className="gig" alt="..." />
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default Home