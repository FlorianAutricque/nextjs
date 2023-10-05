import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-utils";
import Head from "next/head";
import { Fragment } from "react";

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Flo's Blog</title>
        <meta name="description" content="I post about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
