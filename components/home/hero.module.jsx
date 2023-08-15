import Image from "next/image";

import heroImage from '../../assets/images/hero/header.webp';

import styles from '../../styles/home.module.css';

const Hero = () => {
    return (
        <section>
            <Image 
                src={heroImage}
                className={styles.hero__main_image} 
                alt="Hero image code on a screen" 
                width="1920" 
                height="1080"
                priority 
            />
        </section>
    )
}

export default Hero;