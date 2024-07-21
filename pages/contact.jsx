import Image from "next/image";
import Head from "next/head";

import globalMeta from '../data/globalMeta';

import contactImage from '../public/header.webp';

import FeaturedImage from "../components/FeaturedImage.component";
import Layout from "../components/Layout";
import Address from "../components/Address.component";
import ContactForm from "../components/ContactForm.component";
import GoogleMaps from "../components/GoogleMaps.component";

import styles from "../styles/contact-page.module.css";

const Contact = () => {
    const featuredImage = (
        <FeaturedImage 
          title="Contact" 
          imageSrc="/contact-page-hero.webp" 
          alt="Home Header Image" 
        />
    );

    return (
        <>
            <Head>
                <title>Contact Page - Web Cheddar Web Solutions TEST</title>
                <meta name="description" content='TEST'></meta>
                <meta property="og:description" content='TEST2'></meta>
            </Head>

            <Layout featuredImage={featuredImage}> 
                <main>
                    <section>
                        <div className={styles.contact_page__container}>

                            {/* Contact Details */}
                            <div className={styles.contact_page__form_container}>
                                <div className={styles.contact_page__details}>
                                    <div className={styles.contact_page__text}>
                                        <h1 className="section_title_01">Contact</h1>
                                        <h2 className="section_title_02">Get in Touch</h2>
                                        <p className="section_text">Reach out today to discuss how we can bring your website vision to life.</p>
                                    </div>
                                    <Address />
                                </div>
            
                                {/* Form */}
                                <div className={styles.contact_page__form}>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                        <GoogleMaps />
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Contact;