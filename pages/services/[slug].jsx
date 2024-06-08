// pages/services/[slug].jsx
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Header from '../../components/Header.component';
import Services from '../../components/home/Services.component';
import Contact from '../../components/ContactSection.component';
import TestimonialSlider from '../../components/TestimonialSlider.component';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import services from '../../data/services';
import styles from '../../styles/services_pages.module.css';

export default function ServicePage({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className='service__loader'>Loading...</div>;
  }

  if (!service) {
    console.error('Service not found');
    return <div>Service not found</div>;
  }

  // Additional validation
  const requiredFields = ['title', 'description', 'hero', 'hero_alt', 'image_1', 'image_1_alt', 'content'];
  for (const field of requiredFields) {
    if (!service[field]) {
      console.error(`Service is missing required field: ${field}`);
      return <div>Service data is incomplete</div>;
    }
  }

  const header = (
    <Header 
      title={service.title} 
      imageSrc={service.hero} 
      alt={service.hero_alt}
    />
  );

  return (
    <Layout header={header}> 
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta property="og:description" content={service.description} />
        <meta property="og:site_name" content={service.title} />
      </Head>
      <main>
        <div className={styles.services_pages__container}>
          <div className={styles.service__breadcrumbs}>
            <Link href="/">Home</Link>
            {' > '}
            <Link href="/services">Services</Link>
            {' > '}
            <span>{service.title}</span>
          </div>

          <section>
            <div className={`${styles.services_pages__section} flex flex_nowrap`}>
              <Image
                src={service.image_1}
                alt={service.image_1_alt}
                className={styles.service__main_img}
                width={768}
                height={550}
              />
              <div>
                <h2>{service.title}</h2>
                <div>{parse(service.content)}</div>
              </div>
            </div>
          </section>

          <section>
            <div className={`${styles.services_pages__section} flex flex_nowrap`}>
                <div>
                    <h2>{service.title}</h2>
                    <div>{parse(service.content2)}</div>
                </div>
                <Image
                    src={service.image_2}
                    alt={service.image_2_alt}
                    className={styles.service__main_img}
                    width={768}
                    height={550}
                />              
            </div>
          </section>

          {service.features && (
            <section className={styles.features_section}>
              <h3>Key Features</h3>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
        
        </div>
        <TestimonialSlider />
        
        <Services />
        <Contact />
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { slug: service.slug },
  }));

  console.log('Generated paths:', paths);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log('Generating page for slug:', params.slug);
  const service = services.find(service => service.slug === params.slug) || null;

  if (!service) {
    console.error('Service not found for slug:', params.slug);
    return { notFound: true };
  }

  return { props: { service }, revalidate: 60 };
}
