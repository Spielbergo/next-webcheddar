import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from './home/services.module.css'; 

const cardVariants = {
  initial: {
    zIndex: 1
  },
  hover: {
    zIndex: 10,
    transition: {
      zIndex: { delay: 0.2 }
    }
  }
};

const imageVariants = {
  initial: {
    width: "30%"
  },
  hover: {
    width: "100%",
    transition: {
      width: { delay: 0.2 }
    }
  }
};

const infoVariants = {
  initial: {
    width: "70%"
  },
  hover: {
    width: "100%",
    transition: {
      width: { delay: 0.2 }
    }
  }
};

export default function ServiceCard({ id, title, text, icon, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${styles.services_home__card} ${styles.shadow}`}
      variants={cardVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <motion.div
        className={styles.services_home__image_container}
        variants={imageVariants}
      >
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={styles.services_home__info}
        variants={infoVariants}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={styles.read_more_button}>Read More</button>
      </motion.div>
      {isHovered && (
        <button
          className={styles.close_button}
          onClick={() => setIsHovered(false)}
        >
          X
        </button>
      )}
    </motion.div>
  );
}
