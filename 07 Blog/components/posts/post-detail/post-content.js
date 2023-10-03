import PostHeader from "./post-header";
import styles from "./post-content.module.css";

import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-ok2",
  title: "getting ok with nextjs",
  image: "next.png",
  date: "2022-02-12",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
