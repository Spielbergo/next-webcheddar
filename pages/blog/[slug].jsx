import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/blog.module.css';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.blog_post__container}> 

      <div className={styles.blog_post__image_container}>
      {/* Image */}
      {post._embedded['wp:featuredmedia'] && 
        <Image  
          src={post._embedded['wp:featuredmedia'][0].source_url} 
          alt={post.title.rendered} 
          className={styles.blog_post__main_img}
          width={1920}
          height={550}
        />
      }

      <div className={styles.blog_post__breadcrumbs}>
          <Link href="/">Home</Link>
          {' > '}
          <Link href="/blog">
          Blog
          </Link>
          {' > '}
          <Link href={`/blog/${post.slug}`}>
          {parse(post.title.rendered)}
          </Link>
        </div>
      </div>

      <div className={styles.blog_post__content}>
        <article>
          <h1>{parse(post.title.rendered)}</h1>
          <div>{parse(post.content.rendered)}</div>
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch('https://shop.webcheddar.ca/wp-json/wp/v2/posts?_embed');
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://shop.webcheddar.ca/wp-json/wp/v2/posts?_embed&slug=${params.slug}`);
  const posts = await response.json();
  const post = posts[0];

  return { props: { post }, revalidate: 60 };
}
