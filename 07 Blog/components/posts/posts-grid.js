import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

function PostsGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map(post => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </ul>
  );
}

export default PostsGrid;
