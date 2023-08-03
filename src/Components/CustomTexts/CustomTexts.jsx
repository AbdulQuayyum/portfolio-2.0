import { motion } from 'framer-motion';
import { TextContainer, TextVariant2 } from '../../Utilities/Motion/Motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    className={`${textStyles}`}
    variants={TextContainer}>
    {Array.from(title).map((letter, index) => (
      <motion.span
        key={index}
        variants={TextVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={TextVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles}`}
  >
    {title}
  </motion.h2>
);
