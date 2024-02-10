import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';

import contactImage from '../assets/images/hero/header.webp';

import styles from '../styles/blog-index.module.css'

export default function Blog({ posts }) {
  return (
    <section className={styles.blog_index__section}>
        <header className="page_header">
            <div className="page_header__text">
                <h1 className="page_header__h1">Our Blog</h1>
            </div>
            <Image 
                src={contactImage}
                className="page_header__image"
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
      </header>
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
  const response = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts/?_embed');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // In seconds
  };
}

export async function getThreeLatestPosts() {
  const response = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts/?_embed&per_page=3');
  const posts = await response.json();

  return posts;
}