import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import styles from '../../styles/blog-page.module.css';

export default function Post({ post, hasTOC, error }) {
  const [isTOCVisible, setTOCVisible] = useState(false);
  const contentRef = useRef(null);
  const router = useRouter();

  const includesCodePen = post?.content?.rendered?.includes('class="codepen"');

  useEffect(() => {
    const toc = contentRef.current?.querySelector('.blog_post__toc');
    if (toc) {
      toc.style.visibility = isTOCVisible ? 'visible' : 'hidden';
      toc.style.maxHeight = isTOCVisible ? '1000px' : '0'; // Adjust as needed
      toc.style.overflow = 'hidden';
      toc.style.transition = 'visibility 0.3s, max-height 0.3s ease-in-out';
    }
  }, [isTOCVisible]);

  const toggleTOC = () => {
    setTOCVisible(!isTOCVisible);
  };

  if (router.isFallback) {
    return <div className='error_messge__loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error_messge__loading'>Error loading post: {error.message}</div>;
  }

  if (!post) {
    return <div className='error_messge__loading'>Post not found.</div>;
  }

  return (
    <>
      {includesCodePen && (
        <Script 
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          strategy="lazyOnload"
        />
      )}

      {/* Populate the head with dynamic data */}
      <Head>
        <title>{post.yoast_head_json.title || 'Blog Post'}</title>
        <meta name="description" content={post.yoast_head_json.og_description || ''}></meta>
        <meta property="og:description" content={post.yoast_head_json.og_description || ''}></meta>
        <meta property="og:title" content={post.title.rendered || 'Blog'}></meta>
        {/* Add any other meta tags, link tags, etc. here */}
      </Head>

      <div className={styles.blog_post__container}>        
        <div className={styles.blog_post__image_container}>
          <h1 className={styles.blog_post__blog_title}>{parse(post.title?.rendered || 'Untitled')}</h1>
          <div className={styles.blog_post__overlay}></div>
          {post._embedded?.['wp:featuredmedia'] && (
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title?.rendered || 'Featured Image'}
              className={styles.blog_post__main_img}
              width={1920}
              height={550}
              priority
            />
          )}          
        </div>

        <div className={styles.blog_post__content}>
          <div className={styles.blog_post__breadcrumbs}>
            <Link href="/">Home</Link>
            {' > '}
            <Link href="/blog">Blog</Link>
            {' > '}
            <span>{parse(post.title?.rendered || 'Untitled')}</span>
          </div>

          {hasTOC && (
            <button onClick={toggleTOC}>
              {isTOCVisible ? 'Hide Table of Contents' : 'Show Table of Contents'}
            </button>
          )}

          <article ref={contentRef}>
            <div>{parse(post.content?.rendered || 'No content available')}</div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed');
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
    const response = await fetch(`https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&slug=${params.slug}`);
    const posts = await response.json();
    const post = posts[0] || null;

    const hasTOC = post?.content?.rendered?.includes('class="blog_post__toc"');

    return { props: { post, hasTOC }, revalidate: 60 };
  } catch (error) {
    console.error('Error fetching post:', error);
    return { props: { post: null, hasTOC: false, error: { message: 'Failed to fetch post data.' } }, revalidate: 60 };
  }
}
