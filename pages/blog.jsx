import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import parse from 'html-react-parser';

import FeaturedImage from '../components/FeaturedImage.component';
import Layout from '../components/Layout';

import styles from '../styles/blog-index-page.module.css';

export default function Blog({ initialPosts, totalPages, allCategories, error }) {
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    setIsClient(true);
    filterCategoriesWithPosts();
  }, []);

  const filterCategoriesWithPosts = () => {
    const categoriesWithPosts = allCategories.filter(category => 
      initialPosts.some(post => post.categories.includes(category.id))
    );
    setCategories([{ id: 'All', name: 'All' }, ...categoriesWithPosts]);
  };

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    if (categoryId === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.categories.includes(categoryId)));
    }
  };

  const loadMorePosts = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      try {
        const response = await fetch(`https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&per_page=10&page=${nextPage}`);
        if (!response.ok) {
          throw new Error(`API call failed: ${response.status}`);
        }
        const newPosts = await response.json();
        setPosts([...posts, ...newPosts]);
        setFilteredPosts([...filteredPosts, ...newPosts]);
        setCurrentPage(nextPage);
      } catch (error) {
        console.error('Error fetching more posts:', error);
        setLoadError('Failed to load more posts.');
      }
    }
  };

  const featuredImage = (
    <FeaturedImage 
      title="Web Cheddar Blog" 
      imageSrc="/blog-hero.webp" 
      alt="Web Cheddar Blog index page - Old type writer with the words: 'Something Worth Reading' on the paper" 
    />
  );

  if (error) {
    return <div className='error_messge__loading'>Error loading blogs: {error.message}</div>;
  }

  return (
    <>
    <Head>
        <title>Web CHeddar Blog - Web Cheddar - Websites - Social Media</title>
        <meta name="description" content='Web Cheddar Blog - Web Cheddar Websites - Social Media 🧀 Read the latest articles on web design trends, tips, and industry news.'></meta>
        <meta property="og:description" content='Web Cheddar Blog - Web Cheddar Websites - Social Media 🧀 Read the latest articles on web design trends, tips, and industry news.'></meta>
    </Head>

    <Layout featuredImage={featuredImage}> 
      <main>
        <section className={styles.blog_index__section}>
            
          {/* Category Tabs */}
          <aside className={styles.blog_index__category_tabs}>
            <h2 className={styles.blog_index__category_title}>Categories</h2>
            {categories.map(category => (
              <button
                key={category.id}
                className={currentCategory === category.id ? styles.blog_index__active_tab : ''}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </aside>
          
          {/* Cards */}
          <div className={styles.blog_index__container}>
            {isClient && filteredPosts && filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className={styles.blog_index__card}>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <div>              
                      {post._embedded['wp:featuredmedia'] && 
                        <Image 
                          src={post._embedded['wp:featuredmedia'][0].source_url} 
                          alt={post.title.rendered} 
                          aria-label={post.title.rendered}
                          width={300} 
                          height={200}
                        />
                      }
                      <div className={styles.blog_index__card_text}>
                        <h2>{parse(post.title.rendered)}</h2>
                        <div>{parse(post.excerpt.rendered)}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              !isClient && <div>Loading posts...</div>
            )}
            {isClient && filteredPosts.length === 0 && <div>No posts found.</div>}
            {loadError && <div>{loadError}</div>}
          </div>
          {isClient && currentPage < totalPages && (
            <button onClick={loadMorePosts}>Load More</button>
          )}
        </section>
      </main>
    </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const postsResponse = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&per_page=40');
    if (!postsResponse.ok) {
      throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
    }
    const initialPosts = await postsResponse.json();

    const categoriesResponse = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/categories');
    if (!categoriesResponse.ok) {
      throw new Error(`Failed to fetch categories: ${categoriesResponse.status}`);
    }
    const allCategories = await categoriesResponse.json();

    return {
      props: {
        initialPosts,
        allCategories,
        totalPages: Math.ceil(initialPosts.length / 40),
      },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        initialPosts: [],
        allCategories: [],
        totalPages: 0,
        error: { message: 'Failed to fetch data.' },
      },
    };
  }
}
