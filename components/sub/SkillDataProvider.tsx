'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

// const SkillDataProvider = ({ src, width, height, index }: Props) => {
const SkillDataProvider = ({ src = '', width = 100, height = 100, index = 0 }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      data-testid='motion-container' //? Testing
      ref={ref} // Associates the DOM element with the ref provided by useInView, enabling it to monitor the element's presence within the viewport.
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}>
      <Image
        src={src}
        width={width}
        height={height}
        alt='Skill Image'
      />
    </motion.div>
  );
};

export default SkillDataProvider;
