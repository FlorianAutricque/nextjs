import { getPostData, getPostsFiles } from "@/lib/posts-utils";
import PostContent from "../../components/posts/post-detail/post-content";
import { Fragment } from "react";
import Head from "next/head";

function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesnames = getPostsFiles();

  const slugs = postFilesnames.map(fileName => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
