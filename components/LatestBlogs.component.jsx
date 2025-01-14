import styles from '../../styles/home.module.css';

const LatestBlogs = ({ posts }) => {
  return (
    <div className={styles.text__container}>
      <h1>Latest Blog Posts</h1>
      {posts}
    </div>    
  );
}

export async function getThreeLatestPosts() {
    const response = await fetch('https://shop.webcheddar.ca/wp-json/wp/v2/posts?_embed&per_page=3');
    const posts = await response.json();

    return posts;
}

export default LatestBlogs;
