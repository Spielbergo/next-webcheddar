import Image from "next/image";
import Head from "next/head";
import FeaturedImage from "../components/FeaturedImage.component";
import Layout from "../components/Layout";
import { aboutPage } from '../data/index';
import TestimonialSlider from "../components/TestimonialSlider.component";
import styles from '../styles/about-page.module.css';

const About = () => {
    const featuredImage = (
        <FeaturedImage 
          title="About Us" 
          imageSrc="/header.webp" 
          alt="Home Header Image" 
        />
    );

    return (
        <>
        <Head>
            <title>About Us - Web Cheddar Web Solutions</title>
            <meta name="description" content='TEST ABOUT'></meta>
            <meta property="og:description" content='TEST2'></meta>
            <meta property="og:site_name" content='TEST2 SITENAME'></meta>
        </Head>

        <Layout featuredImage={featuredImage}>         
            <main>
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
