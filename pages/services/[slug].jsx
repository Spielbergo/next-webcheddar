import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import parse from 'html-react-parser';

import Layout from '../../components/Layout';
import FeaturedImage from '../../components/FeaturedImage.component';
import TechStack from '../../components/TechStack.component';
import Services from '../../components/Services.component';
import RandomTestimonial from '../../components/RandomTestimonial';
import Contact from '../../components/ContactSection.component';
import TestimonialSlider from '../../components/TestimonialSlider.component';

import services from '../../data/services';

import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart, MdOutlineQueryStats } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaCircleCheck } from "react-icons/fa6";

import styles from '../../styles/services-pages.module.css';

const iconComponents = {
  MdOutlineWeb: MdOutlineWeb,
  MdOutlineQueryStats: MdOutlineQueryStats,
  IoSearchCircle: IoSearchCircle,
  IoConstructOutline: IoConstructOutline,
  TiSocialAtCircular: TiSocialAtCircular,
  MdOutlineShoppingCart: MdOutlineShoppingCart,
  MdEvent: MdEvent
};

export default function ServicePage({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className='service__loader'>Loading...</div>;
  }

  if (!service) {
    return <div className='error_messge__loading'>Could not load data: Service data not found</div>;
  }

  // Additional validation
  const requiredFields = ['title', 'description', 'hero', 'hero_alt', 'image_1', 'image_1_alt', 'content'];
  for (const field of requiredFields) {
    if (!service[field]) {
      console.error(`Service is missing required field: ${field}`);
      return <div className='error_messge__loading'>Service data is incomplete</div>;
    }
  }

  const featuredImage = (
    <FeaturedImage 
      title={service.title} 
      imageSrc={service.hero} 
      alt={service.hero_alt}
    />
  );

  return (
    <Layout featuredImage={featuredImage}> 
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta property="og:description" content={service.description} />
        <meta property="og:title" content={service.title} />
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
          <div>
            <div>
              <section>
                <div className={`${styles.services_pages__section} flex flex_nowrap`}>
                  <Image
                    src={service.image_1}
                    alt={service.image_1_alt}
                    aria-label={service.image_1.alt}
                    className={`${styles.service__main_img} fade-in`}
                    width={550}
                    height={547}
                  />
                  <div>
                    <h2 className='section_title_01'>Why Choose Us For</h2>
                    <h3 className='section_title_02'>{service.title}</h3>
                    <p className='section_text'>{parse(service.content)}</p>
                    {service.features && (
                    <section className={styles.services_features__section}>
                      <h3>Key Features</h3>
                      <ul className={styles.services_features__items}>
                        {service.features.map((feature, index) => (
                          <li key={`${service.id}_feature_${index}`} className={`slide-right delay-${index}`}>
                            <FaCircleCheck />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  </div>
                </div>
              </section>
            </div>
            <div>
              {/* Stats Section */}
              <section>
                <div className={styles.services_pages_stats}>
                  {service.stats.map((stat, index) => {
                    const IconComponent = iconComponents[service.statsIcon];
                    return (
                      <ul key={`${service.id}_${index}`}>     
                        <li className={`slide-down delay-${index}`}>{IconComponent && <IconComponent />}{stat}</li>                            
                      </ul>
                    );
                  })}
                </div>
              </section>

              <RandomTestimonial />

              <TechStack style={{ margin: '75px 0 0' }} />
              
              <Contact style={{ margin: '75px 0' }} />
              
              <section>
                <div className={`${styles.services_pages__section} flex flex_nowrap flex_flip`}>
                  <div>
                    <h2 className='section_title_01'>More info</h2>
                    <h3 className='section_title_02'>{service.title2}</h3>
                    <p className='section_text'>{parse(service.content2)}</p>
                  </div>
                  <Image
                    src={service.image_2}
                    alt={service.image_2_alt}
                    aria-label={service.image_2.alt}
                    className={styles.service__main_img}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles.service__pages_blockquote}>
                  <p>{service.blockquote}</p>
                  <p>{service.blockquoteAuthor}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Services />
        <TestimonialSlider />
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const service = services.find(service => service.slug === params.slug) || null;

    if (!service) {
      console.error('Service not found for slug:', params.slug);
      return { notFound: true };
    }

    return { props: { service }, revalidate: 60 };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}
