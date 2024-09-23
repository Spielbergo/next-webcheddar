import Image from "next/image";
import Head from "next/head";

import { aboutPage } from '../data/index';

import FeaturedImage from "../components/FeaturedImage.component";
import globalMeta from "../data/globalMeta";
import Layout from "../components/Layout";
import TestimonialSlider from "../components/TestimonialSlider.component";

import styles from '../styles/about-page.module.css';

const About = () => {
    const featuredImage = (
        <FeaturedImage 
          title="About Us" 
          imageSrc="/about/about-us-page-hero.webp" 
          alt="About Us Page - Dark image with 2 computer screens 1 with code." 
          aria-label="About Us Page - Dark image with 2 computer screens 1 with code."
        />
    );

    return (
        <>
        <Head>
            <title>About Us - Web Cheddar - Websites - Social Media</title>
            <meta name="description" content='About Us - Web Cheddar Websites - Social Media 🧀 Learn about our mission, values, and the talented team that brings your vision to life.'></meta>
            <meta property="og:description" content='About Us - Web Cheddar Websites - Social Media 🧀 Learn about our mission, values, and the talented team that brings your vision to life.'></meta>
        </Head>

        <Layout featuredImage={featuredImage}>         
            <main>
                <section>
                    <div className={`flex flex_large ${styles.about_page__container}`}>
                        {aboutPage.map((about) => 
                            <div key={about.id} className={about.class}>
                                <Image 
                                    src={about.image}
                                    width={500}
                                    height={350}                        
                                    alt={about.alt}
                                />
                                {/* Text */}
                                <div className={styles.about_page__container_text}>
                                    <h2 className="section_title_01">{about.title}</h2>
                                    <h3 className="section_title_02">{about.subtitle}</h3>
                                    <p className="section_text">{about.text}</p>
                                </div>
                            </div>
                        )}
                        <div>
                            <h3>Web Cheddar Web Solutions is more than a web development company; we are a dedicated team committed to delivering superior digital solutions.<br />
                            <strong>We invite you to contact us for unparalleled web development services.</strong></h3>
                        </div>
                    </div>
                </section>
                <TestimonialSlider />
            </main>
        </Layout>
        </>
    )
}

export default About;
