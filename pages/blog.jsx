import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';

import styles from '../styles/blog_index.module.css'

export default function Blog({ posts }) {
  return (
    <section className={styles.blog_index__section}>
      <h1 className={styles.blog_index__title}>Our Blogs</h1>
      <div className={styles.blog_index__container}>
        {posts.map(post => (
          <div key={post.id} className={styles.blog_index__card}>
             <Link href={`/blog/${post.slug}`}>
            <div>              
              {post._embedded['wp:featuredmedia'] && 
                <Image 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered} 
                  width={300} 
                  height={200}
                />
              }
              <div className={styles.blog_index__card_text}>
                <h2>{parse(post.title.rendered)}</h2>
                <div>{parse(post.excerpt.rendered).slice(0, 100)}</div>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://shop.webcheddar.ca/wp-json/wp/v2/posts?_embed');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // In seconds
  };
}

export async function getThreeLatestPosts() {
  const response = await fetch('https://shop.webcheddar.ca/wp-json/wp/v2/posts?_embed&per_page=3');
  const posts = await response.json();

  return posts;
}