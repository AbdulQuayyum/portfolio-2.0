import { motion } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { FadeInAnimation } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';

const Contact = (props) => {

  return (
    <motion.section className="contact main-section" id="Contact">
      <TitleText
        title="Contact Me"
        textStyles="section-title dark:text-[#fff]" />
      <TypingText
        title="Get in touch"
        textStyles="section-subtitle dark:text-gray-400" />
      <motion.div
        variants={FadeInAnimation('up', 'tween', 0.2, 1)}
        className="contact-container main-container main-grid">
        <div className="contact-content">
          <h3 className="contact-title dark:text-gray-300">Let's have a conversation </h3>
          <div className="contact-info">
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              < SiGmail className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">Email</h3>
              <span className="contact-card-data dark:text-gray-300">alaoabdulquayyumm@gmail.com</span>
              <a href="mailto:alaoabdulquayyumm@gmail.com" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              < BsWhatsapp className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">Whatsapp</h3>
              <span className="contact-card-data dark:text-gray-300">+234 807 859 5073</span>
              <a href="https://api.whatsapp.com/send?phone=2348078595073&text=Heyy Abdul-Quayyum, I am" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              < BsLinkedin className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">LinkedIn</h3>
              <span className="contact-card-data dark:text-gray-300">Abdul-Quayym Alao</span>
              <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/message" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Contact me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              <BsGithub className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">GitHub</h3>
              <span className="contact-card-data dark:text-gray-300">AbdulQuayyum</span>
              <a href="https://github.com/AbdulQuayyum" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Follow me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              <BsInstagram className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">Instagram</h3>
              <span className="contact-card-data dark:text-gray-300">theabdulquayyum</span>
              <a href="https://www.instagram.com/theabdulquayyum" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Follow me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
            <div className="contact-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
              <BsTwitter className='contact-card-icon dark:text-[#fff]' />
              <h3 className="contact-card-title dark:text-gray-200">Twitter</h3>
              <span className="contact-card-data dark:text-gray-300">@theabdulquayyum</span>
              <a href="https://twitter.com/theabdulquayyum" target="_blank" rel="noreferrer" className="contact-button dark:text-[#fff]">
                Follow me {" "} < FaHandPointRight className='contact-button-icon dark:text-[#fff]' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Contact
