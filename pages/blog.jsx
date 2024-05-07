import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';

import Header from '../components/Header.component';
import Layout from '../components/Layout';

import styles from '../styles/blog-index.module.css';

export default function Blog({ initialPosts, totalPages, allCategories }) {
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

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
      }
    }
  };

  const header = (
    <Header 
      title="Web Cheddar Blog" 
      imageSrc="/header.webp" 
      alt="Home Header Image" 
    />
  );

  return (
    <Layout header={header}> 
    <main>
      <section className={styles.blog_index__section}>
          
        {/* Category Tabs */}
        <div className={styles.blog_index__category_tabs}>
          {categories.map(category => (
            <button
              key={category.id}
              className={currentCategory === category.id ? styles.blog_index__active_tab : ''}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
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
                        width={300} 
                        height={200}
                      />
                    }
                    <div className={styles.blog_index__card_text}>
                      <h2>{parse(post.title.rendered)}</h2>
                      <p>{parse(post.excerpt.rendered)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            !isClient && <div>Loading posts...</div>
          )}
        </div>
        {isClient && currentPage < totalPages && (
          <button onClick={loadMorePosts}>Load More</button>
        )}
      </section>
    </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsResponse = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/posts?_embed&per_page=100'); // Adjust per_page as needed
  const initialPosts = await postsResponse.json();

  const categoriesResponse = await fetch('https://www.webcheddar.ca/blog/wp-json/wp/v2/categories');
  const allCategories = await categoriesResponse.json();

  return {
    props: {
      initialPosts,
      allCategories,
      totalPages: Math.ceil(initialPosts.length / 40), // Adjust according to your pagination logic
    },
    revalidate: 86400, // 24 hours
  };
}
