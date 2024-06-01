// pages/services/[slug].jsx
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import services from '../../data/services';
import styles from '../../styles/services.module.css';

export default function ServicePage({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className='service__loader'>Loading...</div>;
  }

  if (!service) {
    return <div>Loading service...</div>;
  }

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description}></meta>
        <meta property="og:description" content={service.description}></meta>
        <meta property="og:site_name" content={service.title}></meta>
        {/* Add any other meta tags, link tags, etc. here */}
      </Head>

      <div className={styles.service__container}>
        <div className={styles.service__image_container}>
          <h1 className={styles.service__title}>{service.title}</h1>
          <div className={styles.service__overlay}></div>
          <Image
            src={service.image}
            alt={service.title}
            className={styles.service__main_img}
            width={1920}
            height={550}
            priority
          />
        </div>

        <div className={styles.service__content}>
          <div className={styles.service__breadcrumbs}>
            <Link href="/">Home</Link>
            {' > '}
            <Link href="/services">Services</Link>
            {' > '}
            <span>{service.title}</span>
          </div>

          <article>
            <div>{parse(service.content)}</div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const service = services.find(service => service.slug === params.slug) || null;

  return { props: { service }, revalidate: 60 };
}
