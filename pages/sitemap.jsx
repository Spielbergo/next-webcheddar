import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import Header from '../components/FeaturedImage.component';

import styles from '../styles/sitemap-page.module.css'

const Sitemap = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch WordPress blog posts
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&per_page=100'); // Adjust per_page as needed
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  const header = (
    <Header 
      title="Sitemap" 
      imageSrc="/header.webp" 
      alt="Sitemap Header Image" 
    />
  );

  return (
    <Layout header={header}> 
        <section>
            <div className={styles.sitemap__container}>
                <h2>Pages</h2>
                {/* <ul>
                    {pages.map((page, index) => (
                    <li key={index}>
                        <Link href={`/${page}`}>
                        <a>{page}</a>
                        </Link>
                    </li>
                    ))}
                </ul> */}
                <ul>
                    <li><Link href="/">Homepage</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Services">Services</Link></li>
                    <li><Link href="/Blogs">Blogs</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
                <h2>Blog Posts</h2>
                <ul>
                    {blogs.map((blog, index) => (
                    <li key={index}>
                        <Link href={`/blog/${blog.slug}`}>{blog.title.rendered}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    </Layout>
  );
};

// export async function getServerSideProps() {
//     try {
//       const response = await fetch('/api/pages');
//       if (!response.ok) {
//         throw new Error('Failed to fetch pages');
//       }
//       const pages = await response.json();
//       return { props: { pages } };
//     } catch (error) {
//       console.error('Error fetching pages:', error);
//       return { props: { pages: [] } }; 
//     }
//   }
  
  export default Sitemap;