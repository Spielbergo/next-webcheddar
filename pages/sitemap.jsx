import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import FeaturedImage from '../components/FeaturedImage.component';

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

  const featuredImage = (
    <FeaturedImage 
      title="Sitemap" 
      imageSrc="/header.webp" 
      alt="Sitemap Header Image" 
    />
  );

  return (
    <Layout featuredImage={featuredImage}> 
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
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <ul className={styles.sitemap__sub_list}>
                      <li><Link href="/services/web-design-development/">Web Design & Development</Link></li>
                      <li><Link href="/services/search-engine-optimization/">Search Engine Optimization</Link></li>
                      <li><Link href="/services/website-maintenance/">Website Maintenance</Link></li>
                      <li><Link href="/ervices/social-media-management/">Social Media Management</Link></li>
                      <li><Link href="/services/e-commerce-solutions/">E-commerce Solutions</Link></li>
                      <li><Link href="/services/special-event-websites/">Special Event Websites</Link></li>
                    </ul>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/Ccntact">Contact</Link></li>
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