import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import parse from 'html-react-parser';

import globalMeta from '../../data/globalMeta';

import styles from '../../styles/blog-page.module.css';

export default function Post({ post, hasTOC, error }) {
  const [isTOCVisible, setTOCVisible] = useState(false);
  const contentRef = useRef(null);
  const router = useRouter();

  const includesCodePen = post?.content?.rendered?.includes('class="codepen"');

  const structuredLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": `${globalMeta.siteName}`,
    "legalName" : `${globalMeta.siteLegalName}`,
    "url": `${globalMeta.siteUrl}${router.asPath}`,
    "logo": `${globalMeta.siteUrl}${globalMeta.siteLogo}`,
    "foundingDate": `${globalMeta.siteFoundingDate}`,
    "founders": {
      "@type": "Person",
      "name": `${globalMeta.siteOwner}`
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": `${globalMeta.addressLocality}`,
      "addressRegion": `${globalMeta.addressRegion}`,
      "postalCode": `${globalMeta.postalCode}`,
      "addressCountry": `${globalMeta.addressCountry}`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": `${globalMeta.contactType}`,
      "email": `${globalMeta.supportEmail}`
    },
    "sameAs": [
      "http://www.facebook.com/webcheddar",
      "https://www.linkedin.com/company/web-cheddar/",
    ]}
  );

  useEffect(() => {
    const toc = contentRef.current?.querySelector('.blog_post__toc');
    if (toc) {
      toc.style.visibility = isTOCVisible ? 'visible' : 'hidden';
      toc.style.maxHeight = isTOCVisible ? '1000px' : '0'; // Adjust as needed
      toc.style.overflow = 'hidden';
      toc.style.transition = 'visibility 0.3s, max-height 0.4s ease-in-out';
    }
  }, [isTOCVisible]);

  const toggleTOC = () => {
    setTOCVisible(!isTOCVisible);
  };

  if (router.isFallback) {
    return <div className='error_message__loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error_message__loading'>Error loading post: {error.message}</div>;
  }

  if (!post) {
    return <div className='error_message__loading'>Post not found.</div>;
  }

  const ogImage = post.yoast_head_json?.og_image?.[0] || {};

  const robotsMetaTags = [
    { name: 'robots', content: `max-snippet:-1` },
    { name: 'robots', content: `max-image-preview:large` },
    { name: 'robots', content: `max-video-preview:-1` },
  ];

  return (
    <>
      {includesCodePen && (
        <Script 
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          strategy="lazyOnload"
        />
      )}

      <Head>
        <meta name="robots" content={`${post.yoast_head_json.robots.index} ${post.yoast_head_json.robots.follow}`}></meta>
        {robotsMetaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
        <title>{post.yoast_head_json.title || 'Blog Post'}</title>
        <meta name="description" content={post.yoast_head_json.description}></meta>
        <meta name="author" content={post.yoast_head_json.author}></meta>
        <meta name="article:modified_time" content={post.yoast_head_json.article_published_time}></meta>
        <meta property="og:description" content={post.yoast_head_json.og_description}></meta>
        <meta property="og:title" content={post.yoast_head_json.og_title}></meta>
        <meta property="og:locale" content={post.yoast_head_json.locale}></meta>
        <meta property="og:type" content={post.yoast_head_json.og_type}></meta>
        <meta property="og:image" content={ogImage.url}></meta>
        <meta property="og:image:width" content={ogImage.width}></meta>
        <meta property="og:image:height" content={ogImage.height}></meta>
        <meta property="og:image:type" content={ogImage.type}></meta>
        {/* Schema */}
        <script
          type="application/ld+json"
        	dangerouslySetInnerHTML={{__html: structuredLd}}
        	key="item-jsonld"
    	  />
      </Head>

      <div className={styles.blog_post__container}>        
        <div className={styles.blog_post__image_container}>
          <div className={styles.blog_post__blog_title_container}>
            <div><h1 className={styles.blog_post__blog_title}>{parse(post.title?.rendered || 'Untitled')}</h1></div>
            <div className={styles.blog_post__breadcrumbs}>
              <Link href="/">Home</Link>
              {' > '}
              <Link href="/blog">Blog</Link>
              {' > '}
              <span>{parse(post.title?.rendered || 'Untitled')}</span>
            </div>
          </div>
          <div className={styles.blog_post__overlay}></div>
          {post._embedded?.['wp:featuredmedia'] && (
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title?.rendered || 'Featured Image'}
              aria-label={post.title?.rendered || 'Featured Image'}
              className={styles.blog_post__main_img}
              width={1920}
              height={550}
              priority
            />
          )}          
        </div>

        <div className={styles.blog_post__content}>      

          {hasTOC && (
            <button onClick={toggleTOC}>
              {isTOCVisible ? 'Hide Table of Contents' : 'Show Table of Contents'}
            </button>
          )}

          <article ref={contentRef}>
            <div>
              <h2>Published by: Scott Sutherland</h2>
            </div>
            <div>{parse(post.content?.rendered || 'No content available')}</div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch('https://blog.webcheddar.ca/wp-json/wp/v2/posts?_embed');
    const posts = await response.json();

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`https://blog.webcheddar.ca/wp-json/wp/v2/posts?_embed&slug=${params.slug}`);
    const posts = await response.json();
    const post = posts[0] || null;

    const hasTOC = post?.content?.rendered?.includes('class="blog_post__toc"');

    return { props: { post, hasTOC }, revalidate: 60 };
  } catch (error) {
    console.error('Error fetching post:', error);
    return { props: { post: null, hasTOC: false, error: { message: 'Failed to fetch post data.' } }, revalidate: 60 };
  }
}
