import Head from "next/head";

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
          alt="Contact Page - Row of p;f school country mail boxes" 
        />
    );

    return (
        <>
            <Head>
                <title>Contact - Web Cheddar - Websites - Social Media</title>
                <meta name="description" content='Contact - Web Cheddar - Websites - Social Media for top-notch web design services. Reach out to our friendly team for inquiries or support.'></meta>
                <meta property="og:description" content='Contact - Web Cheddar - Websites - Social Media for top-notch web design services. Reach out to our friendly team for inquiries or support.'></meta>
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