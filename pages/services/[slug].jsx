// pages/services/[slug].jsx
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Header from '../../components/Header.component';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import services from '../../data/services';
import styles from './services_pages.module.css';

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
        <meta name="description" content={service.description}></meta>
        <meta property="og:description" content={service.description}></meta>
        <meta property="og:site_name" content={service.title}></meta>
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
        </div>
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
  } else {
    console.log('Found service:', service);
  }

  return { props: { service }, revalidate: 60 };
}
