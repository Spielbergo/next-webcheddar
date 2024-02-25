import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import styles from '../../styles/blog.module.css';

export default function Post({ post, hasTOC }) {
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
    return <div className='blog_loader'>Loading...</div>;
  }

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <>
      {includesCodePen && (
        <Script 
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          strategy="lazyOnload"
        />
      )}

      <div className={styles.blog_post__container}>        
        <div className={styles.blog_post__image_container}>
          <h1 className={styles.blog_post__blog_title}>{parse(post.title.rendered)}</h1>
          {post._embedded?.['wp:featuredmedia'] && (
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className={styles.blog_post__main_img}
              width={1920}
              height={550}
            />
          )}          
        </div>

        <div className={styles.blog_post__content}>
          <div className={styles.blog_post__breadcrumbs}>
            <Link href="/">Home</Link>
            {' > '}
            <Link href="/blog">Blog</Link>
            {' > '}
            <span>{parse(post.title.rendered)}</span>
          </div>

          {hasTOC && (
            <button onClick={toggleTOC}>
              {isTOCVisible ? 'Hide Table of Contents' : 'Show Table of Contents'}
            </button>
          )}

          <article ref={contentRef}>
            <div>{parse(post.content.rendered)}</div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed');
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&slug=${params.slug}`);
  const posts = await response.json();
  const post = posts[0] || null;

  const hasTOC = post?.content?.rendered?.includes('class="blog_post__toc"');

  return { props: { post, hasTOC }, revalidate: 60 };
}
