import Image from "next/image";

import aboutHeaderImg from '../assets/images/hero/header.webp'

import { aboutPage } from '../constants/index';
import TestimonialSlider from "../components/TestimonialSlider.component";

import styles from '../styles/about-page.module.css';

const About = () => {
    return (
        <>
        <header className="header">
            <div className="page_header__text">
                <h1 className="page_header__h1">About Web Cheddar</h1>
            </div>
            <Image 
                src={aboutHeaderImg}
                className="page_header__image"
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
        </header>

        <section>
            <div className={`flex ${styles.about_page__container}`}>
                {aboutPage.map((about) => 
                    <div key={about.id} className={about.class}>
                        <Image 
                            src={about.image}
                            width={500}
                            height={350}                        
                            alt={about.alt}
                        />
                        {/* Text */}
                        <div>
                            <h2 className="section_title_01">{about.title}</h2>
                            <h3 className="section_title_02">{about.subtitle}</h3>
                            <p className="section_text">{about.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>

        <TestimonialSlider />
        </>
    )
}

export default About;