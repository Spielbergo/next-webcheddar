import Image from "next/image";

import aboutImage01 from '../public/about/about-us-page-01.webp';
import aboutImage02 from '../public/about/about-us-page-02.webp';
import aboutImage03 from '../public/about/about-us-page-03.webp';

import Hero from "../components/home/Hero.module";
import TestimonialSlider from "../components/TestimonialSlider.component";

import styles from '../styles/about-page.module.css';


const About = () => {
    return (
        <>
        <section>
            <div className={styles.about_page__hero}></div>
        </section>

        <section>
            <div className={`container ${styles.about_page__container}`}>
                {/* Image */}
                <div>
                    <Image 
                        src={aboutImage01}
                        width={500}
                        height={350}
                        className="shadow"
                    />
                </div>
                {/* Text */}
                <div>
                    <h2 className="section_title_01">About Us</h2>
                    <h3 className="section_title_02">About Us</h3>
                    <h2 className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </div>
                
            </div>
        </section>

        <section>
            <div className={`container ${styles.about_page__container}`}>
                {/* Text */}
                <div>
                    <h2 className="section_title_01">About Us</h2>
                    <h3 className="section_title_02">About Us</h3>
                    <h2 className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </div>

                {/* Image */}
                <div>
                    <Image 
                        src={aboutImage02}
                        width={500}
                        height={350}                        
                        className="shadow"
                    />
                </div>
                
            </div>
        </section>

        <section>
            <div className={`container ${styles.about_page__container}`}>
                {/* Image */}
                <div>
                    <Image 
                        src={aboutImage03}
                        width={500}
                        height={350}
                        className="shadow"
                    />
                </div>
                {/* Text */}
                <div>
                    <h2 className="section_title_01">About Us</h2>
                    <h3 className="section_title_02">About Us</h3>
                    <h2 className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </div>
                
            </div>
        </section>
        <TestimonialSlider />
        </>
    )
}

export default About;